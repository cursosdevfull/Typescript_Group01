function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOGGING - PERSON")
class Person {
  name = "Alan";

  constructor() {
    console.log("Creating a new person...");
  }
}

const person = new Person();
console.log(person);
