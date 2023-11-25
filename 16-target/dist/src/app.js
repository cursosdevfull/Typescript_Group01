"use strict";
console.log("Sending message from file app.ts");
var user = "Juan";
function concat(a, b) {
    return a + b;
}
var input = document.getElementById("name");
var button = document.querySelector("button");
button.addEventListener("click", function () {
    var value = input.value;
    alert("Value = " + value);
});
//# sourceMappingURL=app.js.map