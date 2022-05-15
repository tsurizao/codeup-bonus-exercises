(function () {
    "use strict"

    // There are MUCH easier ways to handle adding the first/last digit
    // of an integer together (such as:

    function easyFirstAndLastDigitSumFunction(num) {
        console.log("Initial decimal places are not used for calculation.");
        let array = Math.floor(num).toString().split("");
        return parseInt(array[0]) + parseInt(array[array.length - 1]);
    }

    // ) The purpose of the following functions is to demonstrate the
    // understanding of different types of loops.

    // This function converts to integer and returns the sum of the first
    // and last digit, FOR LOOP version.  If a number is a single digit
    // such as 5 then the sum will equal 10, since 5 is technically the
    // first and last digit.

    function forLoopFirstAndLastDigitSum(num) {
        console.log("Initial decimal places are not used for calculation.");
        if (parseFloat(num) === Math.floor(parseFloat(num))) {
            let sum = 0;
            for (let i = num; i !== 0; i = Math.floor(i / 10)) {
                sum = num % 10 + i;
            }
            return sum;
        } else {
            return "Please use an integer(non-decimal) value.";
        }
    }

    // This function converts to integer and returns the sum of the first
    // and last digit, WHILE LOOP version.  If a number is a single digit
    // such as 5 then the sum will equal 10, since 5 is technically the
    // first and last digit.

    function whileLoopFirstAndLastDigitSum(num) {
        console.log("Initial decimal places are not used for calculation.");
        if (parseFloat(num) === Math.floor(parseFloat(num))) {
            let sum = 0;
            let i = num;
            while (i !== 0) {
                sum = num % 10 + i;
                i = Math.floor(i / 10);
            }
            return sum;
        } else {
            return "Please use an integer(non-decimal) value.";
        }
    }

    // This function converts to integer and returns the sum of the first
    // and last digit, FOR EACH LOOP version.  If a number is a single
    // digit such as 5 then the sum will equal 10, since 5 is technically
    // the first and last digit. Because this type of loop requires an
    // array, the number/string is converted to an array.

    function forEachLoopFirstAndLastDigitSum(num) {
        console.log("Initial decimal places are not used for calculation.");
        let newNum = Math.floor(num);
        if (parseFloat(num) === num) {
            let numbers = num.toString().split("");
            //  return numbers[0] + numbers[numbers.length - 1];  easier solution
            let newNumbers = [0, 0];
            numbers.forEach((function (number) {
                if (newNumbers[0] === 0) {
                    newNumbers[0] = parseInt(number);
                }
                if (parseInt(number) === num % 10) {
                    newNumbers[newNumbers.length - 1] = parseInt(number);
                }
            }));
            return newNumbers[0] + newNumbers[1];
        } else {
            return "Please us an integer(non-decimal) value."
        }
    }
}());