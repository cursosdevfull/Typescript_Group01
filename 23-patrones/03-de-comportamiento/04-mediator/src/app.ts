import { Mediator, Member } from "./mediator.js";

const mediator = new Mediator();
const member01 = new Member("PROJECT 01", mediator);
const member02 = new Member("PROJECT 02", mediator);
const member03 = new Member("PROJECT 03", mediator);

mediator.register(member01);
mediator.register(member02);
mediator.register(member03);

member01.sent("PROJECT 01", { message: "Update references 01" });
member01.sent("PROJECT 01", { message: "Update references 01-2" });
member02.sent("PROJECT 02", { message: "Update references 02" });
member03.sent("PROJECT 03", { message: "Update references 03" });
