export interface Iterator<T> {
  next(): T;
  hasNext(): boolean;
}

export interface Aggregator<T> {
  createIterator(): Iterator<T>;
}

export class Notification {
  constructor(private topic: string, payload: object) {}
}

export class NotificationIterator implements Iterator<Notification> {
  private index = 0;

  constructor(private notifications: Notification[]) {}

  next(): Notification {
    return this.notifications[this.index++];
  }

  hasNext(): boolean {
    return this.index < this.notifications.length;
  }
}

export class NotificationsPending implements Aggregator<Notification> {
  private notifications: Notification[] = [];

  createIterator(): Iterator<Notification> {
    return new NotificationIterator(this.notifications);
  }

  addNotification(topic: string, payload: object): void {
    this.notifications.push(new Notification(topic, payload));
  }
}
