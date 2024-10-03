
export interface Attendee {
  id: number;
  firstName: string;
  lastName: string;
  eventId: number;
  ticketIdentifier: string;
  checkedInAt: Date | null;
}
