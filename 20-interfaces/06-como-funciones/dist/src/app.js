"use strict";
let operation;
operation = (op1, op2, kindOperation) => {
    if (kindOperation === "add") {
        return op1 + op2;
    }
    return op1 - op2;
};
console.log(operation(1, 2, "add"));
