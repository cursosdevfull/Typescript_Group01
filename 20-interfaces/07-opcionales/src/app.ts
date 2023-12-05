interface WithName {
  readonly name: string;
  outputName?: string;
}

interface WithGreetings extends WithName {
  greet(phrase: string): string;
}

class Person implements WithGreetings {
  name: string;
  outputName?: string;

  constructor(name: string, outputName?: string) {
    this.name = name;

    if (outputName) this.outputName = outputName;
  }

  greet(phrase: string): string {
    if (this.outputName) {
      return `Hi, I'm ${this.outputName} and I say ${phrase}`;
    }
    return `Hi, I'm ${this.name} and I say ${phrase}`;
  }
}

const person: Person = new Person("John");
console.log(person.greet("One of a kind"));
