import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@adamzhangtickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
