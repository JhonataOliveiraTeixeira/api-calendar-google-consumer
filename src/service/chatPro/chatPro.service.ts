import chatpro from '@api/chatpro';
import { Injectable } from "@nestjs/common";
import { calendar_v3 } from "googleapis/build/src/apis/calendar/v3";

@Injectable()
export class chatProService {
  async getDetails(event: calendar_v3.Schema$Event): Promise<{}> {
    try {
      const phoneRegex = /\+55\s?(\d{2})\s?(\d{4,5})-?(\d{4})/;

      // Regex para capturar o primeiro link
      const urlRegex = /https?:\/\/[^\s]+/;

      // Pega a descrição do evento
      const description = event.description;
      console.log(description)

      // Captura o telefone com a regex
      const clientPhone = description.match(phoneRegex);
      const inviteUrl = description.match(urlRegex);

      if (!clientPhone && !inviteUrl) {
        console.log('Dados não encontrados');
      }

      const sessionId = await this.getSession(clientPhone[0])
      console.log(sessionId)

      this.sendMessage(sessionId, inviteUrl)
    } catch {
      return { status: 400, message: 'Invalid input. Please check event.' }
    }
  }

  async getSession(clientPhone): Promise<string> {
    let sessionId;

    try {
      const { data } = await chatpro.getOrCreateSessionByNumber(
        {
          instanceId: process.env.INSTANCE_ID,
          provider: 'whatsapp',
          number: clientPhone
        },
        { 'instance-token': process.env.API_KEY_CHATPRO }
      );

      sessionId = data.id;
      console.log(sessionId)

      return sessionId; // Retorne o sessionId se necessário
    } catch (err) {
      console.error(err);
      console.log('Deu ruim no id');
    }
  }


  async sendMessage(sessionId, link): Promise<void> {
    console.log(sessionId)

    chatpro.messagesSendmessage({
      instanceId: process.env.INSTANCE_ID,
      sessionId: sessionId,
      provider: 'whatsapp',
      message: `Olá, segue o link da reunião agendada para ${new Date()} abaixo \n
${link}
        `
    }, { 'instance-token': process.env.API_KEY_CHATPRO })
      .then(({ data }) => console.log(data))
      .catch(err => console.error(err));
  }

}
