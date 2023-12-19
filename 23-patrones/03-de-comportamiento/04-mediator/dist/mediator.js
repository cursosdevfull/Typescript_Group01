export class Member {
    constructor(name, mediator) {
        this.name = name;
        this.mediator = mediator;
    }
    sent(to, payload) {
        this.mediator.sent(this.name, to, payload);
    }
    receive(from, payload) {
        console.log(`Message received from ${from} to ${this.name}: ${JSON.stringify(payload)}`);
    }
    getName() {
        return this.name;
    }
}
export class Mediator {
    constructor() {
        this.members = {};
    }
    register(member) {
        if (!this.members.hasOwnProperty(member.getName())) {
            this.members[member.getName()] = member;
        }
    }
    sent(from, to, payload) {
        if (this.members.hasOwnProperty(to)) {
            this.members[to].receive(from, payload);
        }
    }
}
