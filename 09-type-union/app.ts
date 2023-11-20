function combine(input1: string | number, input2: string | number) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else if (typeof input1 === "string" && typeof input2 === "string") {
    return input1.toUpperCase() + " " + input2.toUpperCase();
  }
}

const combineNames = combine("Juan", "Carlos");

console.log(combineNames);

const combineAges = combine(20, 30);

console.log(combineAges);
