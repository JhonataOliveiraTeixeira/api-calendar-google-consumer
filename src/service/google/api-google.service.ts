import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';
import * as process from 'process';
import { authenticate } from '@google-cloud/local-auth';
import { google, Auth } from 'googleapis';
import { Cron } from '@nestjs/schedule';
import { RedisService } from 'src/config/redis';
import { createEventInterface } from 'src/interfaces/create-event.interface';

@Injectable()
export class ApiGoogleService {
  // Escopo atualizado para permitir criar e gerenciar eventos
  private readonly SCOPES = [
    'https://www.googleapis.com/auth/calendar'
  ];
  private readonly TOKEN_PATH = path.join(process.cwd(), 'token.json');
  private readonly CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');
  private readonly SYNC_TOKEN_KEY = 'google_calendar_sync_token';

  constructor(private readonly redis: RedisService) { }

  /**
   * Carrega ou solicita autorização para chamar APIs do Google.
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
   * Lista eventos e os armazena no Redis com TTL de 15 minutos antes do início.
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
   *TODO: Lógica para disparar mensagens para clientes que tem reunião marcada, dedicado para implantadores.
   */
  // @Cron('*/30 * * * * *') // Ajuste para executar a cada 30 segundos
  // public async handleUpcomingEvents(): Promise<void> {
  //   const keys = await this.redis.keys('event:*');

  //   for (const key of keys) {
  //     const eventData = await this.redis.get(key);
  //     const event = JSON.parse(eventData);

  //     // Lógica para disparar evento
  //     const start = new Date(event.start.dateTime || event.start.date).getTime();
  //     const now = Date.now();

  //     if (start - now <= 15 * 60 * 1000) {
  //       // Remove o evento do Redis e dispara a lógica necessária
  //       await this.redis.del(key);
  //       console.log('Evento próximo:', event);
  //     }
  //   }
  // }

  /**
   * Cria um evento no Google Calendar.
   */
  public async createEvent(calendarId: string, eventData: createEventInterface) {
    const auth = await this.authorize();
    const calendar = google.calendar({ version: 'v3', auth });

    try {
      const result = await calendar.events.insert({
        calendarId: calendarId,
        requestBody: eventData,
      });

      console.log('Evento criado: %s', result.data.htmlLink);
      return result.data;
    } catch (err) {
      console.error('Erro ao criar evento:', err);
      throw err;
    }
  }

  /**
  * Sincroniza eventos do Google Calendar com suporte a sincronização incremental.
  */
  @Cron('45 * * * * *')
  public async syncEvents(calendarId?: string): Promise<void> {
    const auth = await this.authorize();
    const calendar = google.calendar({ version: 'v3', auth });

    const request: any = {
      calendarId: calendarId || 'primary',
    };

    const syncToken = await this.redis.get(this.SYNC_TOKEN_KEY);
    if (syncToken) {
      request.syncToken = syncToken;
    } else {
      console.log('Realizando sincronização completa.');
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
      request.timeMin = oneYearAgo.toISOString();
    }

    let pageToken: string | null = null;
    let events: any;

    do {
      request.pageToken = pageToken;

      try {
        events = await calendar.events.list(request);
      } catch (error: any) {
        if (error.response?.status === 410) {
          console.log('Token de sincronização inválido, limpando dados e reiniciando sincronização.');
          await this.redis.del(this.SYNC_TOKEN_KEY);
          return;
        } else {
          throw error;
        }
      }

      const items = events.data.items || [];
      if (items.length === 0) {
        console.log('Nenhum evento novo para sincronizar.');
      } else {
        console.log(items)
      }

      pageToken = events.data.nextPageToken || null;
    } while (pageToken);

    if (events?.data?.nextSyncToken) {
      await this.redis.set(this.SYNC_TOKEN_KEY, events.data.nextSyncToken);
    }

    console.log('Sincronização concluída.');
  }

  /**
  * Lista as agendas do Google que aquele e-mail tem acesso.
  */
  @Cron('0 0 * * *')
  public async getCalendarList() {
    const auth = await this.authorize();
    const calendar = google.calendar({ version: 'v3', auth });

    const response = await calendar.calendarList.list()


    const data = response.data.items

    const calendarsDetails = data.map((calendar) => ({
      id: calendar.id,
      summary: calendar.summary,
      backgroundColor: calendar.backgroundColor,
    }));
    return calendarsDetails
  }
}
