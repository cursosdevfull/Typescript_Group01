export class Notification {
    constructor(topic, payload) {
        this.topic = topic;
    }
}
export class NotificationIterator {
    constructor(notifications) {
        this.notifications = notifications;
        this.index = 0;
    }
    next() {
        return this.notifications[this.index++];
    }
    hasNext() {
        return this.index < this.notifications.length;
    }
}
export class NotificationsPending {
    constructor() {
        this.notifications = [];
    }
    createIterator() {
        return new NotificationIterator(this.notifications);
    }
    addNotification(topic, payload) {
        this.notifications.push(new Notification(topic, payload));
    }
}
