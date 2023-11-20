function addElements(a: number, b: number): number {
  return a + b;
}

//let operation: Function
let operation: (a: number, b: number) => number;

operation = addElements;

console.log(operation(2, 3));
