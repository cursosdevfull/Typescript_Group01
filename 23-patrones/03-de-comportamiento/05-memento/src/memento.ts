export class Store {
  private states: State[] = [];

  save(state: State) {
    this.states.push(state);
  }

  getState(index: number) {
    return this.states[index];
  }

  getStates() {
    return this.states;
  }
}

export class State {
  constructor(private readonly payload: object) {}

  getPayload() {
    return this.payload;
  }
}

export class App {
  private payload!: object;

  setState(payload: object) {
    this.payload = payload;
  }

  restoreState(state: State) {
    this.payload = state.getPayload();
  }

  saveState(): State {
    return new State(this.payload);
  }

  showState() {
    console.log(this.payload);
  }
}
