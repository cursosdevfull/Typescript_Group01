import { appTitle } from "./title.js";

console.log("Sending message from file app.ts");
const user = "Juan";

let lastname;

function concat(a: any, b: any) {
  return a + b;
}

const input = document.getElementById("name")! as HTMLInputElement;
const button = document.querySelector("button")! as HTMLButtonElement;

button.addEventListener("click", () => {
  const value = input.value;
  alert("Value = " + value);
});

console.log("title", appTitle);

lastname = "Hidalgo";
console.log("lastname", lastname);
