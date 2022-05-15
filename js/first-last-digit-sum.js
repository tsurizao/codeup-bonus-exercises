// (function () {
"use strict"

// There are MUCH easier ways to handle adding the first/last digit
// of an integer together (such as:

// Note: Decimal places will be removed by function, if present.
function easyFirstAndLastDigitSumFunction(input) {
    if (typeof parseFloat(input) === "number") {
        console.log("Decimal places are not used for calculation.");
        let array = Math.floor(input).toString().split("");
        return parseInt(array[0]) + parseInt(array[array.length - 1]);
    } else {
        return "Please use an integer(non-decimal) value.";
    }
}

console.log(easyFirstAndLastDigitSumFunction(12));
console.log(easyFirstAndLastDigitSumFunction("12"));
console.log(easyFirstAndLastDigitSumFunction(34525));
console.log(easyFirstAndLastDigitSumFunction("34525"));
console.log(easyFirstAndLastDigitSumFunction(312.24));
console.log(easyFirstAndLastDigitSumFunction("312.34"));
console.log("===================================");

// ) The purpose of the following functions is to demonstrate the
// understanding of different types of loops.

// This function converts to integer and returns the sum of the first
// and last digit, FOR LOOP version.  If a number is a single digit
// such as 5 then the sum will equal 10, since 5 is technically the
// first and last digit.
// Note: Decimal places will be removed by function, if present.

function forLoopFirstAndLastDigitSum(input) {
    if (typeof parseFloat(input) === "number") {
        console.log("Decimal places are not used for calculation.");
        let num = Math.floor(input)
        let sum = 0;
        for (let i = num; i !== 0; i = Math.floor(i / 10)) {
            sum = num % 10 + i;
        }
        return sum;
    } else {
        return "Please use an integer(non-decimal) value.";
    }
}

console.log(forLoopFirstAndLastDigitSum(12));
console.log(forLoopFirstAndLastDigitSum("12"));
console.log(forLoopFirstAndLastDigitSum(34525));
console.log(forLoopFirstAndLastDigitSum("34525"));
console.log(forLoopFirstAndLastDigitSum(312.24));
console.log(forLoopFirstAndLastDigitSum("312.34"));
console.log("===================================");


// This function converts to integer and returns the sum of the first
// and last digit, WHILE LOOP version.  If a number is a single digit
// such as 5 then the sum will equal 10, since 5 is technically the
// first and last digit.
// Note: Decimal places will be removed by function, if present.

function whileLoopFirstAndLastDigitSum(input) {
    if (typeof parseFloat(input) === "number") {
        console.log("Decimal places are not used for calculation.");
        let sum = 0;
        let i = Math.floor(input);
        while (i !== 0) {
            sum = Math.floor(input) % 10 + i;
            i = Math.floor(i / 10);
        }
        return sum;
    } else {
        return "Please use an integer(non-decimal) value.";
    }
}

console.log(whileLoopFirstAndLastDigitSum(12));
console.log(whileLoopFirstAndLastDigitSum("12"));
console.log(whileLoopFirstAndLastDigitSum(34525));
console.log(whileLoopFirstAndLastDigitSum("34525"));
console.log(whileLoopFirstAndLastDigitSum(312.24));
console.log(whileLoopFirstAndLastDigitSum("312.34"));
console.log("===================================");


// This function converts to integer and returns the sum of the first
// and last digit, FOR EACH LOOP version.  If a number is a single
// digit such as 5 then the sum will equal 10, since 5 is technically
// the first and last digit.  Because this type of loop requires an
// array, the number/string is converted to an array.
// Note: Decimal places will be removed by function, if present.

function forEachLoopFirstAndLastDigitSum(input) {
    console.log("Decimal places are not used for calculation.");
    let newNum = Math.floor(input);
    if (typeof parseFloat(input) === "number") {
        let inputToInteger = Math.floor(input);
        let numbers = inputToInteger.toString().split("");
        let newNumbers = [0, 0];
        numbers.forEach((function (number) {
            if (newNumbers[0] === 0) {
                newNumbers[0] = parseInt(number);
            }
            if (parseInt(number) === inputToInteger % 10) {
                newNumbers[newNumbers.length - 1] = parseInt(number);
            }
        }));
        return newNumbers[0] + newNumbers[1];
    } else {
        return "Please us an integer(non-decimal) value."
    }
}

console.log(forEachLoopFirstAndLastDigitSum(12));
console.log(forEachLoopFirstAndLastDigitSum("12"));
console.log(forEachLoopFirstAndLastDigitSum(34525));
console.log(forEachLoopFirstAndLastDigitSum("34525"));
console.log(forEachLoopFirstAndLastDigitSum(312.24));
console.log(forEachLoopFirstAndLastDigitSum("312.34"));

// }());