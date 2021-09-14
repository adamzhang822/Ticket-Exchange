import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@adamzhangtickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
