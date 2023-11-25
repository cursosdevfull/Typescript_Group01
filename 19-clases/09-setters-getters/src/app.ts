class Accounting {
  private persons: string[] = [];

  set addPerson(person: string) {
    this.persons.push(person);
  }

  get listPersons() {
    return this.persons;
  }

  set person(person: string) {
    this.persons.push(person);
  }

  get person() {
    return this.persons.join(", ");
  }
}

const accounting = new Accounting();
accounting.addPerson = "Augusto";
accounting.addPerson = "Pedro";
accounting.addPerson = "Juan";

console.log(accounting.listPersons);

console.log(accounting.person);
