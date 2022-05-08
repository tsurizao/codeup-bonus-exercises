(function(){
    // Checks to see if two numbers are equal up to 3 decimal places
    // if they are equal the function will return true otherwise
    // the function will return false.

    // Example areEqualByThreeDecimalPlaces(34.1784, 34.1787) is true;

    function areEqualByThreeDecimalPlaces(num1, num2){
        num1 = Math.floor(1000 * num1);
        num2 = Math.floor(1000 * num2);
        return num1 === num2;
    }
}());