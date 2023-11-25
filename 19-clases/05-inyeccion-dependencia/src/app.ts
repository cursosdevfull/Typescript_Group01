class UserActivities {
  tasks = ["task1", "task2", "task3", "task4", "task5"];
}

class UserSalary {
  salaryByTask = 100;
  userActivities: UserActivities;

  constructor(userActivities: UserActivities) {
    this.userActivities = userActivities;
  }

  calculateSalary() {
    return this.userActivities.tasks.length * this.salaryByTask;
  }
}

const userActivities = new UserActivities();
const userSalary = new UserSalary(userActivities);
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
