export interface IMessage {
  name: string;
  text: string;
  email?: string;
  phone?: string;
}

export abstract class Notification {
  message!: IMessage;
  abstract send(): void;
}

export class NotificationBase extends Notification {
  constructor(message: IMessage) {
    super();
    this.message = message;
  }

  send(): void {
    console.log(`Enviando notificación a ${this.message.name}`);
  }
}

export class NotificationByEmail extends Notification {
  constructor(private readonly notification: Notification) {
    super();
    this.message = notification.message;
  }

  send(): void {
    this.notification.send();
    console.log(`Enviando notificación por Email a ${this.message.email}`);
  }
}

export class NotificationBySMS extends Notification {
  constructor(private readonly notification: Notification) {
    super();
    this.message = notification.message;
  }

  send(): void {
    this.notification.send();
    console.log(`Enviando notificación por SMS a ${this.message.phone}`);
  }
}

export class NotificationByPush extends Notification {
  constructor(private readonly notification: Notification) {
    super();
    this.message = notification.message;
  }

  send(): void {
    this.notification.send();
    console.log(`Enviando notificación por Push a ${this.message.phone}`);
  }
}

export class NotificationByWhatsapp extends Notification {
  constructor(private readonly notification: Notification) {
    super();
    this.message = notification.message;
  }

  send(): void {
    this.notification.send();
    console.log(`Enviando notificación por Whatsapp a ${this.message.phone}`);
  }
}
