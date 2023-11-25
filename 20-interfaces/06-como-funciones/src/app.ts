interface OperationFn {
  (operator1: number, operator2: number, kindOperation: string): number;
}

let operation: OperationFn;

operation = (op1: number, op2: number, kindOperation: string): number => {
  if (kindOperation === "add") {
    return op1 + op2;
  }
  return op1 - op2;
};

console.log(operation(1, 2, "add"));
