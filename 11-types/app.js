function combineElements(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else if (typeof input1 === "string" && typeof input2 === "string") {
        return input1.toUpperCase() + " " + input2.toUpperCase();
    }
    else {
        return input1.toString() + input2.toString();
    }
}
var combineElementsNames = combineElements("Juan", "Carlos");
console.log(combineElementsNames);
var combinaElementsAges = combineElements(20, 30);
console.log(combinaElementsAges);
function printUser(user) {
    console.log("Name: ".concat(user.name, " - Age: ").concat(user.age));
}
printUser({ name: "Juan", age: 20 });
function createRoute(route) {
    console.log("Path: ".concat(route.path, " - Component: ").concat(route.component));
    route.callback("Route created");
}
var route = {
    path: "/home",
    component: "HomeComponent",
    callback: function (message) {
        console.log(message);
    },
};
createRoute(route);
