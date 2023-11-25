"use strict";
class User {
    constructor(name, age, email, password) {
        this.name = "Juan";
        this.age = 30;
        this.email = "juan@correo.com";
        this.password = "123456";
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
    }
    showInformation() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}, Password: ${this.password}`);
    }
}
const user = new User("Juan", 30, "juan@correo.com", "123456");
//user.name = "Pedro";
console.log("user", user);
user.showInformation();
