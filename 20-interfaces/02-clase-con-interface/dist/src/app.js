"use strict";
class User {
    constructor(id, username, password, email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
    }
}
class UserDatabase {
    constructor() {
        this.users = [];
    }
    static getInstance() {
        if (!UserDatabase.instance) {
            UserDatabase.instance = new UserDatabase();
        }
        return UserDatabase.instance;
    }
    get(id) {
        return this.users.find((user) => user.id === id);
    }
    list() {
        return this.users;
    }
    add(user) {
        this.users.push(user);
    }
}
const userDatabase = UserDatabase.getInstance();
userDatabase.add(new User(1, "john", "1234", "john@correo.com"));
userDatabase.add(new User(2, "jane", "1234", "jane@correo.com"));
userDatabase.add(new User(3, "joe", "1234", "joe@correo.com"));
userDatabase.add(new User(4, "june", "1234", "june@correo.com"));
console.log("list", userDatabase.list());
console.log("get 3", userDatabase.get(3));
const userDatabaseNew = UserDatabase.getInstance();
console.log("list userDatabaseNew", userDatabaseNew.list());
