import {
  OrderCancelledEvent,
  Publisher,
  Subjects,
} from "@adamzhangtickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
