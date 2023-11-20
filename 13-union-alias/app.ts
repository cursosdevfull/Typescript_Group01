type GENDER = "MALE" | "FEMALE";
type RESULT_CONVERSION = "result-number" | "result-string";
type INPUT = string | number;

function combineInput(
  input1: INPUT,
  input2: INPUT,
  gender: GENDER,
  resultConversion: RESULT_CONVERSION
) {
  if (
    typeof input1 === "number" &&
    typeof input2 === "number" &&
    resultConversion === "result-number"
  ) {
    return "SUM " + input1 + input2;
  } else if (
    typeof input1 === "string" &&
    typeof input2 === "string" &&
    resultConversion === "result-string"
  ) {
    return "CONCAT: " + input1.toUpperCase() + " " + input2.toUpperCase();
  } else {
    return input1.toString() + input2.toString();
  }
}

const combineInputNames = combineInput(
  "Juan",
  "Carlos",
  "MALE",
  "result-string"
);

console.log(combineInputNames);

const combineInputAges = combineInput(20, 40, "FEMALE", "result-number");

console.log(combineInputAges);
