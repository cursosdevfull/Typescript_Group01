class User {
  readonly userId: number;
  name: string;
  private email: string;
  private password: string;

  constructor(name: string, email: string, password: string) {
    if (name.length < 3) throw "Name is too short";
    if (password.length < 6) throw "Password is too short";
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
      throw "Email is not valid";

    this.userId = new Date().getTime();
    this.name = name;
    this.email = email;
    this.password = password;
  }

  update(email: string) {
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
      throw "Email is not valid";
    this.email = email;
    //this.userId = 1000000;
  }
}

const user = new User("Augusto", "augusto@correo.com", "123456");
//user.userId = 1000000
//user.email = "micorreo.com"
console.log(user);
user.update("everyone@email.com");
console.log(user);

class Employee {
  constructor(private readonly id: string, public name: string) {}

  describe() {
    return `Employee: ${this.id}, ${this.name}`;
  }
}

const employee = new Employee("1", "Augusto");
//console.log("id", employee.id);
console.log(employee.describe());
