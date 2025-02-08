import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ApiGoogleService } from './api-google.service';
import { EventsController } from './api-google.controller';
import { RedisRepository } from 'src/repositories/cache';
import { RedisService } from 'src/config/redis';
import { EventsGateway } from 'src/gateway/events.gateway';

@Module({
  providers: [ApiGoogleService, ScheduleModule, RedisRepository, RedisService, EventsGateway],
  controllers: [EventsController],
  exports: [ApiGoogleService],
})
export class ApiGoogleModule { }
