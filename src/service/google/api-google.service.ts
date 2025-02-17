import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as process from 'process';
import * as cron from 'node-cron';
import { authenticate } from '@google-cloud/local-auth';
import { google, Auth, calendar_v3 } from 'googleapis';
import { RedisService } from 'src/config/redis';
import { createEventInterface } from 'src/interfaces/create-event.interface';
import { EventsGateway } from 'src/gateway/events.gateway';
import { DeleteEventInterface } from 'src/interfaces/delete-event.interface';
import { UpdateEventInterface } from 'src/interfaces/update-event.interface';

export type NewType = calendar_v3.Schema$Event[];


@Injectable()
export class ApiGoogleService {
  private authClient: Auth.OAuth2Client | null = null;
  private syncJob: cron.ScheduledTask;
  private calendarId: string = 'primary'
  private initialSync: boolean = true

  private readonly SCOPES = [
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.events'
  ];
  private readonly CREDENTIALS_PATH = path.join(
    process.cwd(),
    'credentials.json',
  );
  private readonly SYNC_TOKEN_KEY = 'google_calendar_sync_token';

  constructor(private readonly redis: RedisService,
    private readonly eventsGateway: EventsGateway) { }

  public async authorize() {
    if (this.authClient) {
      const calendarDetaiuls = await this.getCalendarList();
      return { auth: this.authClient, calendarDatails: calendarDetaiuls };
    }

    try {
      const client = (await authenticate({
        scopes: this.SCOPES,
        keyfilePath: this.CREDENTIALS_PATH,
      })) as unknown as Auth.OAuth2Client;

      this.authClient = client;
      const calendarDetaiuls = await this.getCalendarList();

      const eventsData = await this.syncEvents()
      console.log(eventsData)
      if (eventsData && Array.isArray(eventsData) && eventsData.length > 0) {
        this.eventsGateway.broadcastCalendarEvents(eventsData)
      }
      this.scheduleSyncJob();
      return { auth: this.authClient, calendarDatails: calendarDetaiuls };
    } catch (error) {
      console.error('Erro durante a autenticação:', error);
      throw error;
    }
  }

  public async unauthorizeGoogle(): Promise<void> {
    if (!this.authClient) {
      return;
    }
    await this.cancelSyncJob();
    console.log('Logout to Google')
    this.authClient = null;
    this.initialSync = true
    await this.redis.del(this.SYNC_TOKEN_KEY)
  }

  public async scheduleSyncJob(initialSync?: boolean) {
    if (this.syncJob) {
      return;
    }
    this.syncJob = cron.schedule('*/5 * * * * *', async () => {
      console.log('Init sync');
      try {
        const eventsData = await this.syncEvents();
        if (eventsData && Array.isArray(eventsData) && eventsData.length > 0) {
          this.eventsGateway.broadcastCalendarEvents(eventsData)
        }
      } catch (error) {
        console.error('Erro na sincronização:', error);
      }
    });
  }

  public async cancelSyncJob() {
    console.log('Cancel sync');
    if (this.syncJob) {
      this.syncJob.stop();
      this.syncJob = null;
      this.initialSync = false
    }
  }

  public async listEvents(): Promise<void | {}> {
    try {
      const { auth } = await this.authorize();
      const calendar = google.calendar({ version: 'v3', auth });

      const res = await calendar.events.list({
        calendarId: this.calendarId,
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
        const ttl = Math.max((startTime - now - 15 * 60 * 1000) / 1000, 0);

        if (ttl > 0) {
          await this.redis.set(
            `event:${event.id}`,
            JSON.stringify(event),
            'EX',
            Math.floor(ttl),
          );
        }
      }
      return events;
    } catch (error) {
      console.error('Erro em listEvents:', error);
      return { status: 500, message: 'Erro ao listar eventos' };
    }
  }

  public async createEvent(calendarId: string, eventData: createEventInterface) {
    try {
      const auth = this.authClient;
      if (!auth) {
        this.cancelSyncJob();
        throw new Error("Usuário desconectado");
      }

      const calendar = google.calendar({ version: "v3", auth });

      eventData.conferenceData = {
        createRequest: {
          requestId: new Date().toISOString(),
          conferenceSolutionKey: {
            type: "hangoutsMeet",
          },
        },
      };

      const result = await calendar.events.insert({
        calendarId: calendarId,
        conferenceDataVersion: eventData.conferenceData ? 1 : undefined, 
        requestBody: eventData,
      });

      console.log("Evento criado:", result.data.htmlLink);
      console.log("Google Meet Link:", result.data.conferenceData?.entryPoints?.[0]?.uri);

      return result.data;
    } catch (err) {
      console.error("Erro ao criar evento:", err);
      throw err;
    }
  }

  public async syncEvents(): Promise<void | NewType> {
    try {
      const auth = this.authClient;
      if (auth === null) {
        this.cancelSyncJob();
        throw new Error('usuário desconectado');
      }
      const calendar = google.calendar({ version: 'v3', auth });
      const request: any = { calendarId: this.calendarId }
      const syncToken = await this.redis.get(this.SYNC_TOKEN_KEY);
      if (!this.initialSync) {
        request.syncToken = syncToken;
      } else {
        console.log('Realizando sincronização completa.');
        console.log('syncEvents,  initialSync', this.initialSync)
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        request.timeMin = oneYearAgo.toISOString();
        this.initialSync = false
      }
      let pageToken: string | null = null;
      let eventsData: calendar_v3.Schema$Events | null = null;
      do {
        request.pageToken = pageToken;
        request.singleEvents = true
        try {
          console.log('request', request)
          const { data } = await calendar.events.list(request);
          eventsData = data;
          const items = data.items || [];
          if (items.length === 0) {
            console.log('Nenhum evento novo para sincronizar.');
          }
          pageToken = data.nextPageToken || null;
        } catch (error: any) {
          if (error.response?.status === 410) {
            console.log('Token de sincronização inválido, limpando dados e reiniciando sincronização.');
            await this.redis.del(this.SYNC_TOKEN_KEY);
            return;
          } else {
            console.error(error);
          }
        }
      } while (pageToken);
      if (eventsData && eventsData.nextSyncToken) {
        await this.redis.set(this.SYNC_TOKEN_KEY, eventsData.nextSyncToken);
      }
      if (eventsData && eventsData.items) {
        const eventsList = eventsData.items
        return eventsList
      }
    } catch (error) {
      console.error('Erro em syncEvents:', error);
      return;
    }
  }

  public async getCalendarList() {
    try {
      const auth = this.authClient;
      if (auth === null) {
        this.cancelSyncJob();
        throw new Error('usuário desconectado');
      }
      const calendar = google.calendar({ version: 'v3', auth });

      const response = await calendar.calendarList.list();

      const data = response.data.items;

      const calendarsDetails = data.map((calendar) => ({
        id: calendar.id,
        summary: calendar.summary,
        backgroundColor: calendar.backgroundColor,
      }));
      console.log('getCalendarList', calendarsDetails);
      return calendarsDetails;
    } catch (error) {
      console.error('Erro em getCalendarList:', error);
      return { status: 500, message: 'Erro ao obter lista de calendários' };
    }
  }

  public async deleteEvent(deleteEventData: DeleteEventInterface) {
    try {
      const auth = this.authClient;
      if (auth === null) {
        this.cancelSyncJob();
        throw new Error('usuário desconectado');
      }
      const calendar = google.calendar({ version: 'v3', auth });

      const result = await calendar.events.delete({
        calendarId: deleteEventData.calendarId,
        eventId: deleteEventData.eventId
      });

      console.log('Evento deletado: %s', result.data);
      return;
    } catch (err) {
      console.error('Erro ao deletar evento:', err);
      throw err;
    }
  }

  public async updateEvent({ calendarId, end, eventId, start, summary, description }: UpdateEventInterface) {
    try {
      const auth = this.authClient;
      if (auth === null) {
        this.cancelSyncJob();
        throw new Error('usuário desconectado');
      }
      const calendar = google.calendar({ version: 'v3', auth });
      console.log('eventId', eventId)

      const result = await calendar.events.update({
        calendarId,
        eventId,
        requestBody: {
          summary,
          end,
          start,
          description
        }
      });

      console.log('Evento atualizado: %s', result.data);
      return;
    } catch (err) {
      console.error('Erro ao atualizar evento:', err);
      throw err;
    }
  }

  public async setCalendarId(calendarId: string) {
    this.calendarId = calendarId
    this.initialSync = true
  }
}
