export abstract class Observer {
  abstract notify(user: object): void;
}

export class Subject {
  private observers: Observer[] = [];

  register(observer: Observer) {
    this.observers.push(observer);
  }

  unregister(observer: Observer) {
    const index = this.observers.indexOf(observer);
    this.observers.splice(index, 1);
  }

  notify(user: object) {
    this.observers.forEach((observer) => observer.notify(user));
  }
}

export class User {
  constructor(
    private readonly subject: Subject,
    private name: string,
    private lastname: string,
    private email: string
  ) {}

  onCreate() {
    this.subject.notify(this);
  }
}

export class SentEmailRegister extends Observer {
  notify(user: object): void {
    console.log(`SentEmailRegister ${JSON.stringify(user)}`);
  }
}

export class CreateAccess extends Observer {
  notify(user: object): void {
    console.log(`CreateAccess ${JSON.stringify(user)}`);
  }
}
