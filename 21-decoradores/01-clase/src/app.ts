function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Alan";

  constructor() {
    console.log("Creating a new person...");
  }
}

const person = new Person();
console.log(person);
