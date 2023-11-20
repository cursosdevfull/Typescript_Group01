type INPUT = string | number;

function combineElements(input1: INPUT, input2: INPUT) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else if (typeof input1 === "string" && typeof input2 === "string") {
    return input1.toUpperCase() + " " + input2.toUpperCase();
  } else {
    return input1.toString() + input2.toString();
  }
}

const combineElementsNames = combineElements("Juan", "Carlos");
console.log(combineElementsNames);

const combinaElementsAges = combineElements(20, 30);
console.log(combinaElementsAges);

type USER = {
  name: string;
  age: number;
};

function printUser(user: USER) {
  console.log(`Name: ${user.name} - Age: ${user.age}`);
}

printUser({ name: "Juan", age: 20 });

type ROUTE = {
  path: string;
  component: "HomeComponent" | "AboutComponent" | "ContactComponent";
  callback: (message: string) => void;
};

function createRoute(route: ROUTE) {
  console.log(`Path: ${route.path} - Component: ${route.component}`);
  route.callback("Route created");
}

const route: ROUTE = {
  path: "/home",
  component: "HomeComponent",
  callback: (message: string) => {
    console.log(message);
  },
};

createRoute(route);
