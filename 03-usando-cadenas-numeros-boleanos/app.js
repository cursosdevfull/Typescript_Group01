function sum(num1, num2, showResult, phrase) {
    /*if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("Los argumentos deben ser números");
    }*/
    var result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        console.log(result);
    }
    return num1 + num2;
}
function substrat(num1, num2, showResult, phrase) {
    // if (typeof num1 !== "number" || typeof num2 !== "number") {
    //   throw new Error("Los argumentos deben ser números");
    // }
    var result = num1 - num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        console.log(result);
    }
    return num1 - num2;
}
var number1 = 10;
var number2 = 5;
var printResult = true;
var resultPhrase = "Result is: ";
var dateOfResult = new Date();
var dateOfResultLocal = new Date("2023-11-18T15:30:00Z");
// console.log(sum("1", true));
// console.log(substrat("1", true));
console.log(sum(number1, number2, printResult, resultPhrase));
console.log(substrat(number1, number2, printResult, resultPhrase));
console.log(dateOfResult.toISOString());
console.log(dateOfResultLocal.toISOString());
