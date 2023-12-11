export interface IQueue {
  sent(message: string): Promise<boolean>;
}

export abstract class QueueAbstract {
  constructor(protected queue: IQueue) {}
  abstract sentMessage(message: string): Promise<boolean>;
}
