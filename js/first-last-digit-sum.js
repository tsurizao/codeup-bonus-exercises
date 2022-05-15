(function () {
    "use strict"

    // This function accepts an integer and returns the sum of the first
    // and last digit, FOR LOOP version.  If a number is a single digit
    // such as 5 then the sum will equal 10, since 5 is technically the
    // first and last digit.

    function forLoopFirstAndLastDigitSum(num) {
        if (parseFloat(num) === Math.floor(parseFloat(num))) {
            let sum = 0;
            for (let i = num; i !== 0; i = Math.floor(i / 10)) {
                sum = num % 10 + i;
            }
            return sum;
        } else {
            return "Please use an integer(non-decimal) value"
        }
    }

    // This function accepts an integer and returns the sum of the first
    // and last digit, WHILE LOOP version.  If a number is a single digit
    //     // such as 5 then the sum will equal 10, since 5 is technically the
    //     // first and last digit.

    function whileLoopFirstAndLastDigitSum(num) {
        if (parseFloat(num) === Math.floor(parseFloat(num))) {
            let sum = 0;
            let i = num;
            while (i !== 0) {
                sum = num % 10 + i;
                i = Math.floor(i / 10);
            }
            return sum;
        } else {
            return "Please use an integer(non-decimal) value";
        }
    }

    // This function accepts an integer and returns the sum of the first
    // and last digit, FOR EACH LOOP version.  If a number is a single digit
    //     // such as 5 then the sum will equal 10, since 5 is technically the
    //     // first and last digit.

}());