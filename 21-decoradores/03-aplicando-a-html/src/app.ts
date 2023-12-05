function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    console.log("constructor", constructor);
    const hookEl = document.getElementById(hookId);
    const obj = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = obj.personName; //constructor.name;
    }
  };
}

@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  personName = "Alan";

  constructor() {
    console.log("Creating a new person...");
  }
}

const person = new Person();
console.log(person);
