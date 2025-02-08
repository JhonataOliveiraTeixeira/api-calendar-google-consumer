import { Injectable } from '@nestjs/common';
import { RedisService } from 'src/config/redis';
import { ApiGoogleService } from 'src/service/google/api-google.service';

@Injectable()
export class RedisRepository {
  constructor(
    private redis: RedisService,
    private apiGoogle: ApiGoogleService,
  ) {}

  public async handleUpcomingEvents(): Promise<void> {
    const keys = await this.redis.keys('event:*');

    await this.apiGoogle.listEvents();

    for (const key of keys) {
      const eventData = await this.redis.get(key);
      const event = JSON.parse(eventData);

      const start = new Date(
        event.start.dateTime || event.start.date,
      ).getTime();
      const now = Date.now();
      const processedKey = `processed:${key}`;

      const isProcessed = await this.redis.get(processedKey);

      if (!isProcessed) {
        const timeUntilEvent = start - now;

        if (timeUntilEvent > 0 && timeUntilEvent <= 15 * 60 * 1000) {
          await this.redis.set(processedKey, 'true', 'EX', 60 * 60); // Expira em 1h
          console.log(`Evento processado e marcado: ${key}`);
        }

        await this.redis.del(key);
        console.log(`Chave removida: ${key}`);
      } else {
        console.log(`Evento já processado: ${key}`);
      }
    }
  }
}
