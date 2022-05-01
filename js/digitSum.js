/**  This function will add all the digits of a number together */

function digitSum (number){
    if(number < 0){
        return "Please provide a positive number."
    } else {
        var sum = 0;
        while(number > 0){
            sum+=Math.floor(number % 10);
            number = Math.floor(number / 10);
        }
    } return sum;
}