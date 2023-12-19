export class Store {
    constructor() {
        this.states = [];
    }
    save(state) {
        this.states.push(state);
    }
    getState(index) {
        return this.states[index];
    }
    getStates() {
        return this.states;
    }
}
export class State {
    constructor(payload) {
        this.payload = payload;
    }
    getPayload() {
        return this.payload;
    }
}
export class App {
    setState(payload) {
        this.payload = payload;
    }
    restoreState(state) {
        this.payload = state.getPayload();
    }
    saveState() {
        return new State(this.payload);
    }
    showState() {
        console.log(this.payload);
    }
}
