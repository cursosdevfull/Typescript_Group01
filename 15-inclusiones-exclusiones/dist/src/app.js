"use strict";
console.log("Sending message from file app.ts");
const user = "Juan";
function concat(a, b) {
    return a + b;
}
const input = document.getElementById("name");
const button = document.querySelector("button");
button.addEventListener("click", () => {
    const value = input.value;
    alert("Value = " + value);
});
//# sourceMappingURL=app.js.map