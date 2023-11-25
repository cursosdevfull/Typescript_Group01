"use strict";
// interface IUser {
//   readonly id: number;
//   readonly username: string;
//   readonly password: string;
//   readonly email: string;
// }
class User {
    constructor(props) {
        this.id = props.id;
        this.username = props.username;
        this.password = props.password;
        this.email = props.email;
    }
}
const userProperties = {
    id: 1,
    username: "admin",
    password: "1234",
    email: "admin@email.com",
};
//userProperties.id = 2;
const user = new User(userProperties);
console.log(user);
