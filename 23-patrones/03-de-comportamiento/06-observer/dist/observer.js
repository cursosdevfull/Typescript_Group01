export class Observer {
}
export class Subject {
    constructor() {
        this.observers = [];
    }
    register(observer) {
        this.observers.push(observer);
    }
    unregister(observer) {
        const index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    }
    notify(user) {
        this.observers.forEach((observer) => observer.notify(user));
    }
}
export class User {
    constructor(subject, name, lastname, email) {
        this.subject = subject;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
    }
    onCreate() {
        this.subject.notify(this);
    }
}
export class SentEmailRegister extends Observer {
    notify(user) {
        console.log(`SentEmailRegister ${JSON.stringify(user)}`);
    }
}
export class CreateAccess extends Observer {
    notify(user) {
        console.log(`CreateAccess ${JSON.stringify(user)}`);
    }
}
