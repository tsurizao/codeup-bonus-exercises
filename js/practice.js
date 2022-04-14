// ============== BONUS 1

/** Create a function that will take in a formatted string of numbers and return an array of    phone numbers without any symbols. Console.log the output of the returned array.
    EXAMPLE...
 */
     var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';
     function cleanPhoneNumbers(strings){
         return strings.split('-').join("");
     }
     console.log(cleanPhoneNumbers(phoneNumbers));

 /**    the above code should output the following...

        2105552020
        2305552020
        5125553030
*/

// var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';

// ============== BONUS 2

// Write a program to toggle all characters in a string: in a given string, toggle all characters to their opposite case. Special characters will not change.

// Example input: "aBc12#""
// Example output: "AbC12#"
var input = 'aBc12#';
function toggleCase(string){
    var output = "";
    string = string.split("");
    string.forEach(function(char){
        if(char === char.toLowerCase()){
            output += char.toUpperCase();
        } else {
            output += char.toLowerCase();
        }
    })
    return output;
}

console.log(input);
console.log(toggleCase(input));

// ============== BONUS 3

// Write a program that takes a given string appended with a number at the end. The program will check the length of the string to verify the string is equal to the number appended. If the number appended equals the string length, output "Yes". if the number appended does not equal the string length, output "No".

// Example Input: "geek5"
// Example Output: "Yes"
// Example Input: "codingchallenge25"
var input2 = "geek5";
var input3 = "codingChallenge25"
var input4 = "nope10"
var input5 = "theAnswerShouldBeYes22"

function stringLengthCheck(string){
    var output ='';
    for(var i = 0;i < string.length;i++){
        if (!isNaN(string[i])){
            output += string[i];
        }
    }
    return (parseFloat(output) === string.length) ? "Yes" : "No";
}
console.log(stringLengthCheck(input2));
console.log(stringLengthCheck(input3));
console.log(stringLengthCheck(input4));
console.log(stringLengthCheck(input5));