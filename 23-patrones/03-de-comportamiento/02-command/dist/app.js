import { GeneralCommand, } from "./command.js";
const commands = [
    new GeneralCommand({
        orderId: 10,
        clientId: 20,
        products: ["product 01", "product 02"],
    }),
    new GeneralCommand({ orderId: 10, clientId: 20 }),
    new GeneralCommand({
        orderId: 50,
        clientId: 20,
        products: ["product 01", "product 02", "product 03", "product 04"],
    }),
    new GeneralCommand({
        catalogId: 10,
        products: ["product 01", "product 02", "product 03", "product 04"],
    }),
    new GeneralCommand({
        applicantId: 10,
        info: { name: "John Doe", age: 30, email: "john@email.com" },
    }),
];
commands.forEach((command) => command.execute());
