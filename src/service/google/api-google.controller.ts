import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { RedisRepository } from 'src/repositories/cache';
import { ApiGoogleService } from './api-google.service';
import { createEventInterface } from 'src/interfaces/create-event.interface';
import { DeleteEventInterface } from 'src/interfaces/delete-event.interface';
import { UpdateEventInterface } from 'src/interfaces/update-event.interface';
import { UpdateCalendarInterface } from 'src/interfaces/update-calendar.interface';

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

  @Get('/login')
  async loginInGoogle() {
    const response = await this.apiGoogle.authorize()
    return { response };
  }

  @Get('/logout')
  async logOutGoogle() {
    const response = await this.apiGoogle.unauthorizeGoogle();
    return { response };
  }

  @Get('/cancel-sync')
  async cancelSyncWithCalendar() {
    const response = await this.apiGoogle.cancelSyncJob();
    return { response };
  }

  @Get('/init-sync')
  async initSyncWithCalendar() {
    const response = await this.apiGoogle.scheduleSyncJob();
    return { response };
  }

  @Post('create')
  async createEvent(@Body() eventData: createEventInterface) {
    const calendarId = eventData.calendarId;
    const event = await this.apiGoogle.createEvent(calendarId, eventData);
    return { event };
  }

  @Delete('delete/:calendarId/:eventId')
  async deleteEvent(@Param() { calendarId, eventId }: DeleteEventInterface) {
    await this.apiGoogle.deleteEvent({ calendarId, eventId })
  }

  @Put('update/:calendarId/:eventId')
  async updateEvent(@Param() { calendarId, eventId }, @Body() { end, start, summary, description }: UpdateEventInterface) {
    console.log(calendarId)
    await this.apiGoogle.updateEvent({ calendarId, eventId, end, start, summary, description })
  }

  @Put('update/calendarId/')
  async updateCalendarId(@Body() {calendarId}:UpdateCalendarInterface ) {
    console.log(calendarId)
    await this.apiGoogle.setCalendarId(calendarId)
  }

}
