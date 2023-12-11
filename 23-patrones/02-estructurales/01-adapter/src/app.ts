import { ClientHttp } from "./adapter.js";
import { User } from "./interfaces.js";

const ul = document.createElement("ul");

function ShowInfoUser(name: string, email: string) {
  const li = document.createElement("li");
  li.textContent = `${name} - ${email}`;
  ul.appendChild(li);
}

function ShowUsers() {
  const clientHttp = new ClientHttp();
  clientHttp.call(
    "https://jsonplaceholder.typicode.com/users",
    (data: User[]) => {
      data.forEach((user: User) => {
        ShowInfoUser(user.name, user.email);
      });

      document.body.appendChild(ul);
    }
  );
}

ShowUsers();
