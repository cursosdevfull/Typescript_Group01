import {
  CommandHandler,
  GeneralCommand,
  IApplicant,
  IExtort,
  IOrder,
  IUpdateCatalog,
  TPayload,
} from "./command.js";

const commands: CommandHandler<TPayload>[] = [
  new GeneralCommand<IOrder>({
    orderId: 10,
    clientId: 20,
    products: ["product 01", "product 02"],
  }),
  new GeneralCommand<IExtort>({ orderId: 10, clientId: 20 }),
  new GeneralCommand<IOrder>({
    orderId: 50,
    clientId: 20,
    products: ["product 01", "product 02", "product 03", "product 04"],
  }),
  new GeneralCommand<IUpdateCatalog>({
    catalogId: 10,
    products: ["product 01", "product 02", "product 03", "product 04"],
  }),
  new GeneralCommand<IApplicant>({
    applicantId: 10,
    info: { name: "John Doe", age: 30, email: "john@email.com" },
  }),
];

commands.forEach((command) => command.execute());
