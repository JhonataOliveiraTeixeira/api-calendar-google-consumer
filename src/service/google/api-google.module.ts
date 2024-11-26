import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule'
import { ApiGoogleService } from './api-google.service';
import { EventsController } from './api-google.controller';
import { RedisRepository } from 'src/repositories/cache';
import { RedisService } from 'src/config/redis';
import { ChatProModule } from '../chatPro/chaPro.module';

@Module({
  imports: [ChatProModule],
  providers: [ApiGoogleService, ScheduleModule, RedisRepository, RedisService,],
  controllers: [EventsController],
  exports: [ApiGoogleService],
})
export class ApiGoogleModule { }
