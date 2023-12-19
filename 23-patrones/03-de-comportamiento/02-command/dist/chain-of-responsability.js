export class Handler {
    constructor(request) {
        this.request = request;
    }
    setNext(handler) {
        this.handler = handler;
    }
}
export class Authentication extends Handler {
    constructor(request) {
        super(request);
    }
    execute() {
        const token = this.request.headers.token;
        if (token && token === "123456") {
            console.log("Authentication OK");
            this.handler.execute();
        }
        else {
            console.log("Authentication FAIL");
        }
    }
}
export class Authorization extends Handler {
    constructor(request) {
        super(request);
    }
    execute() {
        const roles = this.request.headers.roles;
        const rolesAllowed = ["admin", "user"];
        const isUserAuthorized = roles.some((role) => rolesAllowed.includes(role));
        if (isUserAuthorized) {
            console.log("Authorization OK");
            this.handler.execute();
        }
        else {
            console.log("Authorization FAIL");
        }
    }
}
export class Validate extends Handler {
    constructor(request) {
        super(request);
    }
    handlerRequest(request) {
        throw new Error("Method not implemented.");
    }
    execute() {
        const id = this.request.params.id;
        if (id && id > 0) {
            console.log("Validate OK");
        }
        else {
            console.log("Validate FAIL");
        }
    }
}
