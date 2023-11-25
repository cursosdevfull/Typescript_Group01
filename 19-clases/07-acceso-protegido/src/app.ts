class Person {
  name: string = "Augusto";
  protected email: string = "augusto@correo.com";
  private password: string = "123456";

  getEmail() {
    return this.email;
  }
}

class Developer extends Person {
  getInformationDeveloper() {
    return `Developer: ${this.name} / ${this.email}`;
  }
}

class WebDeveloper extends Developer {
  getInformationWebDeveloper() {
    return `WebDeveloper: ${this.name} / ${this.email}`;
  }
}

const person = new Person();
//console.log(person.email);
