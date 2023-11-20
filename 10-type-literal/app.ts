enum GENDER {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

function combineInput(
  input1: string | number,
  input2: string | number,
  gender: "MALE" | "FEMALE",
  resultConversion: "result-number" | "result-string"
) {
  if (
    typeof input1 === "number" &&
    typeof input2 === "number" &&
    resultConversion === "result-number"
  ) {
    return input1 + input2;
  } else if (
    typeof input1 === "string" &&
    typeof input2 === "string" &&
    resultConversion === "result-string"
  ) {
    return input1.toUpperCase() + " " + input2.toUpperCase();
  } else {
    return input1.toString() + input2.toString();
  }
}

const combineInputNames = combineInput(
  "Juan",
  "Carlos",
  GENDER.MALE,
  "result-string"
);

console.log(combineInputNames);

const combineInputAges = combineInput(20, 30, GENDER.FEMALE, "result-number");

console.log(combineInputAges);
