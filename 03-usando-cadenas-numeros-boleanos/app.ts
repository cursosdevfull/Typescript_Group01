function sum(num1: number, num2: number, showResult: boolean, phrase: string) {
  /*if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Los argumentos deben ser números");
  }*/

  const result = num1 + num2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    console.log(result);
  }

  return num1 + num2;
}

function substrat(
  num1: number,
  num2: number,
  showResult: boolean,
  phrase: string
) {
  // if (typeof num1 !== "number" || typeof num2 !== "number") {
  //   throw new Error("Los argumentos deben ser números");
  // }

  const result = num1 - num2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    console.log(result);
  }

  return num1 - num2;
}

const number1: number = 10;
const number2: number = 5;
const printResult = true;
const resultPhrase = "Result is: ";
const dateOfResult: Date = new Date();
const dateOfResultLocal: Date = new Date("2023-11-18T15:30:00Z");

// console.log(sum("1", true));
// console.log(substrat("1", true));

console.log(sum(number1, number2, printResult, resultPhrase));
console.log(substrat(number1, number2, printResult, resultPhrase));
console.log(dateOfResult.toISOString());
console.log(dateOfResultLocal.toISOString());
