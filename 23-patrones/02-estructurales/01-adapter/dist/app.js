import { ClientHttp } from "./adapter.js";
const ul = document.createElement("ul");
function ShowInfoUser(name, email) {
    const li = document.createElement("li");
    li.textContent = `${name} - ${email}`;
    ul.appendChild(li);
}
function ShowUsers() {
    const clientHttp = new ClientHttp();
    clientHttp.call("https://jsonplaceholder.typicode.com/users", (data) => {
        data.forEach((user) => {
            ShowInfoUser(user.name, user.email);
        });
        document.body.appendChild(ul);
    });
}
ShowUsers();
