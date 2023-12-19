import { App, Store } from "./memento.js";

const store = new Store();

const app = new App();
app.setState([
  { product: "product 01", quantity: 3 },
  { product: "product 02", quantity: 5 },
]);
store.save(app.saveState());

app.setState([
  { product: "product 01", quantity: 3 },
  { product: "product 02", quantity: 5 },
  { product: "product 03", quantity: 2 },
]);
store.save(app.saveState());

app.setState([
  { product: "product 01", quantity: 3 },
  { product: "product 02", quantity: 5 },
  { product: "product 04", quantity: 1 },
]);
store.save(app.saveState());

app.setState([
  { product: "product 01", quantity: 3 },
  { product: "product 02", quantity: 2 },
  { product: "product 04", quantity: 1 },
]);
store.save(app.saveState());

console.log(store.getStates());

console.log("before");
app.showState();

app.restoreState(store.getState(0));

console.log("after");
app.showState();
