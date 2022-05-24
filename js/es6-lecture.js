"use strict";

// ============== Exponentiation

// var num1 = Math.pow(4, 2); // before ES6
// var num2 = 4**2; // ES6 onwards
// console.log(num1);
// console.log(num2);


// ============== Let and Const (block scope vs. function scope)

// var vs. let vs. const
//
// {
//     var a = 10;
// }
//
// {
//     let b = 20;
// }
//
// {
//     const c = 30;
//     console.log(c);
// }
//
// console.log(a);
// console.log(b);
// console.log(c);

// block scope applies to any code structure that can use curly braces (loops, conditional logic, functions, etc.)

// constants can't be reassigned

// const c = 30;
// c = 3;
// console.log(c);


// constants and let can't be redeclared in the same scope

// let test = 'hello';
// let test = 'world';
// test = 'world';
// console.log(test);

// Use constants for everything you can and let for everything else. Don't use var.


// ============== Template Strings

// ES5...

// "You had me at 'meat tornado'" - Ron Swanson

let firstName = "Ron";
let lastName = "Swanson";
//
// let quote = "";
// quote += '"You had me at \'meat tornado\'" - ';
// quote += firstName + " " + lastName;
//
// console.log(quote);


// ES6 Template Strings...

let easierQuote = `"You had me at 'meat tornado'" - ${firstName} ${lastName}`;
console.log(easierQuote);

const output = `Hello my name is ${firstName}, how are you?`
console.log(output);

// Very helpful for building HTML with JS

// let items = ['apple', 'grape', 'orange'];
//
// let itemsHtml = `
//     <ul>
//         <li>${items[0]}</li>
//         <li>${items[1]}</li>
//         <li>${items[2]}</li>
//     </ul>
// `;
//
// console.log(itemsHtml);
// document.write(itemsHtml);

// Can pass in expressions to ${}

const pizza = `I ate ${2 + 2} slices of pizza.`;
console.log(pizza);


// ============== MINI EXERCISE

// TODO: Refactor the following code to use ES6 syntax. The output should stay the same.

const greatDessert = 'banana pudding';
const badDessert = 'rhubarb pie';
const dessertMessage = `Well, I love ${greatDessert} but I don't care for ${badDessert}.`;
console.log(dessertMessage);


// ============== for ..of loop (works on node lists!!!)

const numbers = ["one", "two", "three"];

for (let number of numbers) {
    console.log(number);
}

const hello = "hello";

for(let letter of hello){
    console.log(letter);
}

const people = [
    {
        firstN: 'bob',
        lastN: 'smith'
    },
    {
        firstN: 'sally',
        lastN: 'smith'
    }
];


// regular for loop
// for (var i = 0; i < people.length; i += 1) {
//     console.log(people[i].firstN);
// }

// forEach loop version
// people.forEach(function(person) {
//     console.log(person.firstN);
// });

// for...of loop
// for (let person of people) {
//     console.log(person.firstN);
// }

// const lis = document.querySelectorAll('li');
// for(let li of lis){
//     console.log(li);
// }


// Works on strings

// const hello = 'hello';
// for (let character of hello) {
//     console.log(character);
// }

// ============== MINI EXERCISE

// TODO: Refactor the following code to use ES6 syntax. The output should stay the same.
//
var message = '';
var names = ['John', 'Paul', 'George', 'Ringo'];
// for (var i = 0; i < names.length; i += 1) {
//     message += 'Hello, ' + names[i] + '\n';
// }

for (let name of names){
    message += `Hello, ${name}\n`
}

console.log(message);


// ============== Arrow Functions

// function declaration
// function addOne(arg1) {
//     return arg1 + 1;
// }

// original function expression
// const addOneA = function(arg1) {
//     return arg1 + 1;
// };

// refactor to use arrow functions
// const addOneB = (arg1) => {
//     return arg1 + 1;
// };

// removed curly braces (if only one statement)
// const addOneC = (arg1) => arg1 + 1;

// removed parens if one input only
const addOneD = arg1 => arg1 + 1;

const booleanTern = arg2 => "red" ? "true" : "false";

// console.log(addOneA(2));
// console.log(addOneB(2));
// console.log(addOneC(2));
// console.log(addOneD(2));


const addNames = (fName, lName) => `${fName} ${lName}`;

// const addNames = (fName, lName) => `${fName} ${lName}`;
//
// const firstName = prompt("Hello, enter your first name: ");
// const lastName = prompt("Enter your last name: ");
// alert(`Greetings, ${addNames(firstName, lastName)}`);

// const returnTwo = () => 2;


// ============== MINI EXERCISE

// TODO: Refactor the following code to use ES6 syntax. The output should stay the same.

var doubleInput = (input) => input * 2;


// ============== Default Parameter Values

// Common ES5 approach
// let addArgsA = (num1, num2) => {
//     if (num1 === undefined) {
//         num1 = 2;
//     }
//     if (num2 === undefined) {
//         num2 = 2;
//     }
//     return num1 + num2;
// };

// Shorter ES5 approach
// let addArgsB = (num1, num2) => {
//     num1 = num1 || 2;
//     num2 = num2 || 2;
//     return num1 + num2;
// };


// Even better ES6 approach

// let addArgsC = (num1 = 2, num2 = 2) => num1 + num2;

// Test output

// console.log("\nA output...");
// console.log(addArgsA());
// console.log(addArgsA(1));
// console.log(addArgsA(3, 3));
//
// console.log("\nB output...");
// console.log(addArgsB());
// console.log(addArgsB(1));
// console.log(addArgsB(3, 3));
//
// console.log("\nC output...");
// console.log(addArgsC());
// console.log(addArgsC(1));
// console.log(addArgsC(3, 3));


// ============== Object Assignment Shorthand

// variables to build object from...

// let breed = "Pug";
// let age = 3;
// let name = "Lexie";
// let isCute = true;

// ES5 way...

// var dog = {
//     breed: breed,
//     age: age,
//     name: name,
//     isCute: isCute
// };
// //
// console.log(dog.name);

// ES6 way...

// const dog = {
//     breed,
//     age,
//     name,
//     isCute
// };
// //
// console.log(dog.name);


// ============== Object / Array Destructuring

// object to destructure...

// const puppy = {
//     breed: "Lab",
//     age: 10,
//     name: "Sabrina",
//     isCute: true
// };

// let breed = puppy.breed;
// let age = puppy.age;
// let name = puppy.name;
// let isCute = puppy.isCute;

// let { breed, age, name, isCute } = puppy;
//
//
// //
// console.log(breed);
// console.log(age);
// console.log(name);
// console.log(isCute);

//
// const data = {
//     hum: ["32%", "35%"],
//     temp: {
//         degreesMetric: 34,
//         degreesImperial: 56
//     },
//     pressure: "1100ml",
//     extra: "asdfasd",
//     extra1: "sdfsdf"
// }


// function buildWeatherPanel({ hum, temp, pressure }) {
//     // let { hum, temp, pressure } = data;
//     let { degreesMetric, degreesImperial } = temp;
//     return `
//         <div class="card">
//             <p>${hum[1]}</p>
//             <p>${temp}</p>
//             <p>${pressure}</p>
//         </div>
//     `;
// }


// destructuring with arrays...

// let cats = ["CJ", "Claude", "Max"];

// let [ cat1, cat2, cat3 ] = cats;

// let cat1 = cats[0];
// let cat2 = cats[1];
// let cat3 = cats[2];
//
//
// console.log(cat1);
// console.log(cat2);
// console.log(cat3);


// ============== Destructuring Assignment w/ Functions

// destructuring...

// const getArea = ({ height, width }) => height * width;
//
// let shape = {
//     height: 20,
//     width: 10
// };
//
// let rectangle1 = {
//     height: 40,
//     width: 10
// }
//
// let rectangle2 = {
//     height: 20,
//     width: 40
// }
//
// console.log(getArea(shape));
// console.log(getArea(rectangle1));
// console.log(getArea(rectangle2));

// assignment...

// let height = 20;
// let width = 10;


// console.log(getArea({ height, width }));