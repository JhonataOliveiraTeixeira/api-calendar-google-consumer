import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { calendar_v3 } from "googleapis";
import { Server } from 'socket.io'
import { NewType } from "src/service/google/api-google.service";

@WebSocketGateway({
  cors: {
    origin: '*'
  }
})
export class EventsGateway {
  @WebSocketServer()
  server: Server

  broadcastCalendarEvents(events: NewType) {
    try {

        console.log(events)
        this.server.emit('calendarEvents', events)

    } catch (error) {
      console.log(error)
    }
  }
}