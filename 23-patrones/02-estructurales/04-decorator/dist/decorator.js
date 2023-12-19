export class Notification {
}
export class NotificationBase extends Notification {
    constructor(message) {
        super();
        this.message = message;
    }
    send() {
        console.log(`Enviando notificación a ${this.message.name}`);
    }
}
export class NotificationByEmail extends Notification {
    constructor(notification) {
        super();
        this.notification = notification;
        this.message = notification.message;
    }
    send() {
        this.notification.send();
        console.log(`Enviando notificación por Email a ${this.message.email}`);
    }
}
export class NotificationBySMS extends Notification {
    constructor(notification) {
        super();
        this.notification = notification;
        this.message = notification.message;
    }
    send() {
        this.notification.send();
        console.log(`Enviando notificación por SMS a ${this.message.phone}`);
    }
}
export class NotificationByPush extends Notification {
    constructor(notification) {
        super();
        this.notification = notification;
        this.message = notification.message;
    }
    send() {
        this.notification.send();
        console.log(`Enviando notificación por Push a ${this.message.phone}`);
    }
}
export class NotificationByWhatsapp extends Notification {
    constructor(notification) {
        super();
        this.notification = notification;
        this.message = notification.message;
    }
    send() {
        this.notification.send();
        console.log(`Enviando notificación por Whatsapp a ${this.message.phone}`);
    }
}
