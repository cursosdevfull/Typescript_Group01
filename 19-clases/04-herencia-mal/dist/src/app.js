"use strict";
class UserActivities {
    constructor() {
        this.tasks = ["task1", "task2", "task3"];
    }
}
class UserSalary {
    constructor() {
        this.salaryByTask = 100;
    }
    calculateSalary() {
        const userActivities = new UserActivities();
        return userActivities.tasks.length * this.salaryByTask;
    }
}
const userSalary = new UserSalary();
console.log(userSalary.calculateSalary());
// class UserActivities {
//   tasks = ["task1", "task2", "task3"];
// }
// class UserSalary extends UserActivities {
//   salaryByTask = 100;
//   calculateSalary() {
//     return this.tasks.length * this.salaryByTask;
//   }
// }
// const userSalary = new UserSalary();
// console.log(userSalary.calculateSalary());
