import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from "@adamzhangtickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
