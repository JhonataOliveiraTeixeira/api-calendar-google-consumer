import { Module } from '@nestjs/common';
import { chatProService } from '../chatPro/chatPro.service';

@Module({
  providers: [chatProService],
  exports: [chatProService],
})
export class ChatProModule { }
