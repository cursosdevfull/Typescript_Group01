export class Notification {
  constructor(
    private readonly topic: string,
    private readonly payload: object
  ) {}

  get Topic(): string {
    return this.topic;
  }

  get Payload(): object {
    return this.payload;
  }
}

export abstract class State {
  abstract execute(notification: Notification): void;
}

export class StateAvailable extends State {
  execute(notification: Notification): void {
    console.log(`StateAvailable: ${notification.Topic}`);
  }
}

export class StateBusy extends State {
  execute(notification: Notification): void {
    console.log(`StateBusy: ${notification.Topic}`);
  }
}

export class HandleStates {
  private state: State;

  constructor() {
    this.state = new StateAvailable();
  }

  available() {
    this.state = new StateAvailable();
  }

  busy() {
    this.state = new StateBusy();
  }

  execute(notification: Notification) {
    this.state.execute(notification);
  }
}

export class ReadAndProcessNotification {
  constructor(private readonly handleStates: HandleStates) {}

  read(notification: Notification) {
    this.handleStates.execute(notification);
  }

  available() {
    this.handleStates.available();
  }

  busy() {
    this.handleStates.busy();
  }
}
