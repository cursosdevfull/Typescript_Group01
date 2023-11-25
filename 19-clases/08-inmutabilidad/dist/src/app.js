"use strict";
class User {
    constructor(name, email, password) {
        if (name.length < 3)
            throw "Name is too short";
        if (password.length < 6)
            throw "Password is too short";
        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
            throw "Email is not valid";
        this.userId = new Date().getTime();
        this.name = name;
        this.email = email;
        this.password = password;
    }
    update(email) {
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
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    describe() {
        return `Employee: ${this.id}, ${this.name}`;
    }
}
const employee = new Employee("1", "Augusto");
//console.log("id", employee.id);
console.log(employee.describe());
