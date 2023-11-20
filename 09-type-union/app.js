function combine(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else if (typeof input1 === "string" && typeof input2 === "string") {
        return input1.toUpperCase() + " " + input2.toUpperCase();
    }
}
var combineNames = combine("Juan", "Carlos");
console.log(combineNames);
var combineAges = combine(20, 30);
console.log(combineAges);
