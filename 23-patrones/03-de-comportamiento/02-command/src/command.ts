export interface IOrder {
  orderId: number;
  clientId: number;
  products: string[];
}

export interface IExtort {
  orderId: number;
  clientId: number;
}

export interface IUpdateCatalog {
  catalogId: number;
  products: string[];
}

export interface IApplicant {
  applicantId: number;
  info: { [k: string]: any };
}

export interface INotification {
  email: string;
  subject: string;
  body: string;
}

export type TPayload =
  | IOrder
  | IExtort
  | IUpdateCatalog
  | IApplicant
  | INotification;

export interface ICommand<T> {
  execute(payload: T): Promise<void>;
}

export class CommandHandler<T> implements ICommand<T> {
  protected payload!: T;
  public async execute(): Promise<void> {
    console.log("Command: ", this.payload);
  }
}

/*export class OrderCommand extends Command {
  constructor(payload: IOrder) {
    super();
    this.payload = payload;
  }
}

export class ExtortCommand extends Command {
  constructor(payload: IExtort) {
    super();
    this.payload = payload;
  }
}

export class UpdateCatalogCommand extends Command {
  constructor(payload: IUpdateCatalog) {
    super();
    this.payload = payload;
  }
}

export class ApplicantCommand extends Command {
  constructor(payload: IApplicant) {
    super();
    this.payload = payload;
  }
}

export class NotificationCommand extends Command {
  constructor(payload: INotification) {
    super();
    this.payload = payload;
  }
}*/

export class GeneralCommand<T> extends CommandHandler<T> {
  constructor(payload: T) {
    super();
    this.payload = payload;
  }
}
