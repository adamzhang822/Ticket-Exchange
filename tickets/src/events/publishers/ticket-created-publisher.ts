import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@adamzhangtickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
