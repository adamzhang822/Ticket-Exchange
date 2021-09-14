import {
  OrderCreatedEvent,
  Publisher,
  Subjects,
} from "@adamzhangtickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
