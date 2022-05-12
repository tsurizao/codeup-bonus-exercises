(function () {

// returns the total of all EVEN digits of a positive integer
function evenDigitSum(num) {
    let sum = 0;
    if (num < 0) num *= -1;
    for (let i = num; i > 0; i /= 10) {
        i = Math.floor(i);
        if (i % 2 === 0) {
            sum += i % 10;
        }
    }
    return sum;
}

// returns the total of all ODD digits of a positive integer
function oddDigitSum(num){
    let sum = 0;
    if(num < 0) num *= -1;
    for (let i = num; i > 0; i /= 10) {
        i = Math.floor(i);
        if (i % 2 === 1) {
            sum += i % 10;
        }
    }
    return sum;
}
}());