class User {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public email: string
  ) {}
}

interface UserOperationsDatabase {
  get(id: number): User | undefined;
  list(): User[];
  add(user: User): void;
}

class UserDatabase implements UserOperationsDatabase {
  private static instance: UserDatabase;
  private users: User[] = [];

  private constructor() {}

  static getInstance(): UserDatabase {
    if (!UserDatabase.instance) {
      UserDatabase.instance = new UserDatabase();
    }
    return UserDatabase.instance;
  }

  get(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  list(): User[] {
    return this.users;
  }

  add(user: User): void {
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
