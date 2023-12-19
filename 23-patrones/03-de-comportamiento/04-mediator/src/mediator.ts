export interface Actions {
  sent(to: string, payload: object): void;
  receive(from: string, payload: object): void;
}

export class Member implements Actions {
  constructor(
    private readonly name: string,
    private readonly mediator: Mediator
  ) {}

  sent(to: string, payload: object): void {
    this.mediator.sent(this.name, to, payload);
  }
  receive(from: string, payload: object): void {
    console.log(
      `Message received from ${from} to ${this.name}: ${JSON.stringify(
        payload
      )}`
    );
  }

  getName() {
    return this.name;
  }
}

export interface IMediator {
  register(member: Member): void;
  sent(from: string, to: string, payload: object): void;
}

export class Mediator implements IMediator {
  private members: { [key: string]: Member } = {};

  register(member: Member): void {
    if (!this.members.hasOwnProperty(member.getName())) {
      this.members[member.getName()] = member;
    }
  }

  sent(from: string, to: string, payload: object): void {
    if (this.members.hasOwnProperty(to)) {
      this.members[to].receive(from, payload);
    }
  }
}
