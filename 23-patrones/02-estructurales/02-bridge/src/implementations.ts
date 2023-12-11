import { IQueue, QueueAbstract } from "./abstractions.js";

export class Kafka implements IQueue {
  async sent(message: string): Promise<boolean> {
    console.log(`Message sent to Kafka: ${message}`);
    return Promise.resolve(true);
  }
}

export class RabbitMQ implements IQueue {
  async sent(message: string): Promise<boolean> {
    console.log(`Message sent to RabbitMQ: ${message}`);
    return Promise.resolve(true);
  }
}

export class NotificationNewCampaing extends QueueAbstract {
  constructor(queue: IQueue) {
    super(queue);
  }

  async sentMessage(message: string): Promise<boolean> {
    return await this.queue.sent(message);
  }
}

export class NotificationUpdateCampaing extends QueueAbstract {
  constructor(queue: IQueue) {
    super(queue);
  }

  async sentMessage(message: string): Promise<boolean> {
    return await this.queue.sent(message);
  }
}
