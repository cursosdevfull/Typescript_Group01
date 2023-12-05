"use strict";
class Person {
    constructor(name, outputName) {
        this.name = name;
        if (outputName)
            this.outputName = outputName;
    }
    greet(phrase) {
        if (this.outputName) {
            return `Hi, I'm ${this.outputName} and I say ${phrase}`;
        }
        return `Hi, I'm ${this.name} and I say ${phrase}`;
    }
}
const person = new Person("John");
console.log(person.greet("One of a kind"));
