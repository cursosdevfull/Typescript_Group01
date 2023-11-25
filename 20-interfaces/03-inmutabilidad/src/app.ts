// interface IUser {
//   readonly id: number;
//   readonly username: string;
//   readonly password: string;
//   readonly email: string;
// }

interface IUser {
  id: number;
  username: string;
  password: string;
  email: string;
}

class User {
  private readonly id: number;
  private username: string;
  private password: string;
  private email: string;

  constructor(props: IUser) {
    this.id = props.id;
    this.username = props.username;
    this.password = props.password;
    this.email = props.email;
  }
}

const userProperties: Readonly<IUser> = {
  id: 1,
  username: "admin",
  password: "1234",
  email: "admin@email.com",
};

//userProperties.id = 2;

const user = new User(userProperties);
console.log(user);
