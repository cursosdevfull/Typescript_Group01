import { appTitle } from "./title.js";
console.log("Sending message from file app.ts");
const user = "Juan";
let lastname;
function concat(a, b) {
    return a + b;
}
const input = document.getElementById("name");
const button = document.querySelector("button");
button.addEventListener("click", () => {
    const value = input.value;
    alert("Value = " + value);
});
console.log("title", appTitle);
lastname = "Hidalgo";
console.log("lastname", lastname);
