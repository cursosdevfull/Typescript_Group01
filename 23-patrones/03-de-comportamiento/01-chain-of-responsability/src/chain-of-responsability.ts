export interface Request {
  params: {
    id: number;
  };
  headers: {
    token: string;
    roles: string[];
  };
}

export abstract class Handler {
  protected handler!: Handler;
  protected request: Request;

  constructor(request: Request) {
    this.request = request;
  }

  setNext(handler: Handler): void {
    this.handler = handler;
  }

  abstract execute(): void;
}

export class Authentication extends Handler {
  constructor(request: Request) {
    super(request);
  }
  execute(): void {
    const token = this.request.headers.token;

    if (token && token === "123456") {
      console.log("Authentication OK");
      this.handler.execute();
    } else {
      console.log("Authentication FAIL");
    }
  }
}

export class Authorization extends Handler {
  constructor(request: Request) {
    super(request);
  }

  execute(): void {
    const roles = this.request.headers.roles;
    const rolesAllowed = ["admin", "user"];

    const isUserAuthorized = roles.some((role) => rolesAllowed.includes(role));

    if (isUserAuthorized) {
      console.log("Authorization OK");
      this.handler.execute();
    } else {
      console.log("Authorization FAIL");
    }
  }
}

export class Validate extends Handler {
  constructor(request: Request) {
    super(request);
  }

  handlerRequest(request: Request): void {
    throw new Error("Method not implemented.");
  }
  execute(): void {
    const id = this.request.params.id;

    if (id && id > 0) {
      console.log("Validate OK");
    } else {
      console.log("Validate FAIL");
    }
  }
}
