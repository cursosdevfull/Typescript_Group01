"use strict";
class Database {
    constructor() {
        console.log("CreatedAt", new Date().getTime());
    }
    static createInstance() {
        console.log("createInstance called");
        if (!Database.instance)
            Database.instance = new Database();
        return Database.instance;
    }
}
const database01 = Database.createInstance();
const database02 = Database.createInstance();
const database03 = Database.createInstance();
class UserService {
    constructor() {
        this.users = [];
    }
    static createInstance() {
        console.log("createInstance called");
        if (!UserService.instance)
            UserService.instance = new UserService();
        return UserService.instance;
    }
    addUser(user) {
        this.users.push(user);
    }
    getUsers() {
        return this.users;
    }
}
const userService01 = UserService.createInstance();
userService01.addUser("John");
userService01.addUser("Mary");
userService01.addUser("Jane");
const userService02 = UserService.createInstance();
console.log("List of users - userService02", userService02.getUsers());
const userService03 = UserService.createInstance();
userService03.addUser("Peter");
userService03.addUser("Paul");
const userService04 = UserService.createInstance();
console.log("List of users - userService04", userService04.getUsers());
console.log("List of users - userService02", userService02.getUsers());
// const userService05 = new UserService();
// console.log("List of users - userService05", userService05.getUsers());
