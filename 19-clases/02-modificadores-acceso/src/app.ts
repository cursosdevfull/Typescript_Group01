class User {
  private name: string = "Juan";
  private age: number = 30;
  private email: string = "juan@correo.com";
  private password: string = "123456";

  constructor(name: string, age: number, email: string, password: string) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
  }

  showInformation() {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}, Password: ${this.password}`
    );
  }
}

const user = new User("Juan", 30, "juan@correo.com", "123456");
//user.name = "Pedro";

console.log("user", user);
user.showInformation();
