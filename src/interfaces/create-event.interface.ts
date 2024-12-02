export interface createEventInterface {
  calendarId: string,
  summary: string,
  description: string,
  start: {},
  end: {},
  recurrence?: [],
  attendees: [],
}