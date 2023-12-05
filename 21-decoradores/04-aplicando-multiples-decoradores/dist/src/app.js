var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function WithTemplate(template, hookId) {
    return function (constructor) {
        console.log("constructor", constructor);
        const hookEl = document.getElementById(hookId);
        const obj = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContent = obj.personName; //constructor.name;
        }
    };
}
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
let Person = class Person {
    constructor() {
        this.personName = "Alan";
        console.log("Creating a new person...");
    }
};
Person = __decorate([
    Logger("LOGGING - PERSON"),
    WithTemplate("<h1>My Person Object</h1>", "app"),
    __metadata("design:paramtypes", [])
], Person);
const person = new Person();
console.log(person);
//# sourceMappingURL=app.js.map