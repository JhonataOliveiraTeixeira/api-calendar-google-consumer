import { Controller, Get, Post, Body } from '@nestjs/common';
import { RedisRepository } from 'src/repositories/cache';
import { ApiGoogleService } from './api-google.service';
import { createEventInterface } from 'src/interfaces/create-event.interface';

@Controller('events')
export class EventsController {
  constructor(
    private readonly redisRepository: RedisRepository,
    private readonly apiGoogle: ApiGoogleService,
  ) { }

  @Get()
  async getEvents() {
    const events = await this.redisRepository.handleUpcomingEvents();
    return { events };
  }

  @Post('create')
  async createEvent(@Body() eventData: createEventInterface) {
    const calendarId = eventData.calendarId
    const event = await this.apiGoogle.createEvent(calendarId, eventData);
    return { event };
  }
}
