export class Notification {
    constructor(topic, payload) {
        this.topic = topic;
        this.payload = payload;
    }
    get Topic() {
        return this.topic;
    }
    get Payload() {
        return this.payload;
    }
}
export class State {
}
export class StateAvailable extends State {
    execute(notification) {
        console.log(`StateAvailable: ${notification.Topic}`);
    }
}
export class StateBusy extends State {
    execute(notification) {
        console.log(`StateBusy: ${notification.Topic}`);
    }
}
export class HandleStates {
    constructor() {
        this.state = new StateAvailable();
    }
    available() {
        this.state = new StateAvailable();
    }
    busy() {
        this.state = new StateBusy();
    }
    execute(notification) {
        this.state.execute(notification);
    }
}
export class ReadAndProcessNotification {
    constructor(handleStates) {
        this.handleStates = handleStates;
    }
    read(notification) {
        this.handleStates.execute(notification);
    }
    available() {
        this.handleStates.available();
    }
    busy() {
        this.handleStates.busy();
    }
}
