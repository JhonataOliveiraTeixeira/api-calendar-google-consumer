export interface createEventInterface {
  calendarId: string;
  summary: string;
  description: string;
  start: {};
  end: {};
  recurrence?: [];
  attendees: [];
  conferenceData?: {
    createRequest: {
      requestId: string;
      conferenceSolutionKey: {
        type: "hangoutsMeet";
      };
    };
  };
}
