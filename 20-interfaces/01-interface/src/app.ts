interface Person {
  firstName: string;
  lastName: string;
  age: number;
  //isAdult: () => boolean;
  isAdult(): boolean;
}

let person01: Person;

person01 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isAdult: function () {
    return this.age >= 18;
  },
  // isAdult() {
  //   return this.age >= 18;
  // },
};

console.log("person01", person01);
console.log("person01.isAdult()", person01.isAdult());
console.log("age", person01.age);
