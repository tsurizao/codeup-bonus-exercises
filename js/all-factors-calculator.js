// The purpose of this function is to determine all the factors
// of a given number, store the factor values in an array, and
// return the array of factors.  A while loop version is also
// available below the for loop functino version, currently
// commented out.

function allFactorsCalculator (number){
    var foundFactors = [];
    if (number < 1){
        return "Invalid value";
    }
    for(var i = 1; i <= number;i++){
        if(number % i === 0){
            foundFactors.push(i);
        }
    }
    return foundFactors;
}

// function allFactorsCalculator (number){
//     var foundFactors = [];
//     var i = 1;
//     if(number < 1){
//         return "Invalid input";
//     }
//     while(i <= number){
//         if(number % i === 0){
//             foundFactors.push(i);
//         }
//         i++;
//     }
//     return foundFactors;
// }