"use strict";
function add2(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResult2 = true;
const resultPhrase = "Result is: ";
const result = add2(number1, number2, printResult2, resultPhrase);
