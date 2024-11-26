import { Controller, Get } from '@nestjs/common';
import { RedisRepository } from 'src/repositories/cache';

@Controller('events')
export class EventsController {
  constructor(private readonly redisRepository: RedisRepository) { }

  @Get()
  async getEvents() {
    const events = await this.redisRepository.handleUpcomingEvents();
    return { events };
  }
}
