import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';
import * as process from 'process';
import { authenticate } from '@google-cloud/local-auth';
import { google, Auth } from 'googleapis';
import { Cron } from '@nestjs/schedule';
import { RedisService } from 'src/config/redis';

@Injectable()
export class ApiGoogleService {
  private readonly SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
  private readonly TOKEN_PATH = path.join(process.cwd(), 'token.json');
  private readonly CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

  constructor(private readonly redis: RedisService) { }

  /**
   * Load or request authorization to call APIs.
   */
  private async authorize(): Promise<Auth.OAuth2Client> {
    try {
      const content = await fs.readFile(this.TOKEN_PATH, 'utf-8');
      const credentials = JSON.parse(content);
      return google.auth.fromJSON(credentials) as Auth.OAuth2Client;
    } catch {
      const client = (await authenticate({
        scopes: this.SCOPES,
        keyfilePath: this.CREDENTIALS_PATH,
      })) as Auth.OAuth2Client;

      if (client.credentials) {
        const keys = JSON.parse(await fs.readFile(this.CREDENTIALS_PATH, 'utf-8'));
        const key = keys.installed || keys.web;
        const payload = JSON.stringify({
          type: 'authorized_user',
          client_id: key.client_id,
          client_secret: key.client_secret,
          refresh_token: client.credentials.refresh_token,
        });
        await fs.writeFile(this.TOKEN_PATH, payload, 'utf-8');
      }
      return client;
    }
  }

  /**
   * Lists events and stores them in Redis with a TTL of 15 minutes before the event.
   */
  public async listEvents(): Promise<void> {
    const auth = await this.authorize();
    const calendar = google.calendar({ version: 'v3', auth });

    const res = await calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      maxResults: 50,
      singleEvents: true,
      orderBy: 'startTime',
    });

    const events = res.data.items || [];

    for (const event of events) {
      const start = event.start?.dateTime || event.start?.date;
      const startTime = new Date(start).getTime();
      const now = Date.now();
      const ttl = Math.max((startTime - now - 15 * 60 * 1000) / 1000, 0); // TTL em segundos
      if (ttl > 0) {
        // Salva no Redis com TTL
        await this.redis.set(
          `event:${event.id}`,
          JSON.stringify(event),
          'EX',
          Math.floor(ttl),
        );

      }
    }
  }

  /**
   * Dispara lógica 15 minutos antes do evento.
   */
  @Cron('45 * * * * *')
  public async handleUpcomingEvents(): Promise<void> {
    const keys = await this.redis.keys('event:*');

    for (const key of keys) {
      const eventData = await this.redis.get(key);
      const event = JSON.parse(eventData);

      // Lógica para disparar evento
      const start = new Date(event.start.dateTime || event.start.date).getTime();
      const now = Date.now();

      if (start - now <= 15 * 60 * 1000) {
        await this.redis.del(key);
        return event
      }
    }
  }
}
