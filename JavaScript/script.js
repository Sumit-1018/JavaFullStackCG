// // console.log("Hello, World!..");
// // variable
// //  var or let or const
// // let a = "John";
// // const age = 30;
// // var city = "New York";
// // console.log(a);
// // console.log(age);
// // console.log(city);  

// // var
// var b; //only declaration is possible here
// b=10; // initialization in different line is possible
// console.log(b);
// b=20; // reinitialization is possible in var and let but not in const
// console.log(b);

// var b=30; // redeclaration is possible in var but not in let and const
// console.log(b);

// // let
// let c; // only declaration is possible here
// c=15; // initialization in different line is possible
// console.log(c);
// c=25; // reinitialization is possible in var and let but not in const
// console.log(c);
// // let c=35; // redeclaration is not possible in let but possible in var and const

// // const
// const d=50; // declaration and initialization must be done in the same line
// console.log(d);
// // d=60; // reinitialization is not possible in const but possible in var and let
// // console.log(d);
// // const d=70; // redeclaration is not possible in const but possible in var and let


// // ! difference according to scope
// {
//     var x=100; // var is global scoped, function scoped
//     let y=200; // let is block/local scoped
//     const z=300; // const is block/local scoped
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }
// console.log(x); // var is global scoped so it can be accessed outside the block
// // console.log(y); // let is block/local scoped so it cannot be accessed outside the block
// // console.log(z); // const is block/local scoped so it cannot be accessed outside the block



// // ! String
// let firstName = 'John';
// const lastName = "Doe";
// let fullName = `I am ${firstName} ${lastName}`; // string interpolation
// console.log(fullName);

// let details = ' I am from "LPU" punjab.'; // if we want to use double quotes inside a string then we can use single quotes to define the string
// let details2 = " I am \nfrom 'LPU' punjab."; // if we want to use single quotes inside a string then we can use double quotes to define the string
// console.log(details);
// console.log(details2);

// // in both single and double quotes we can't use multiple lines but in backticks we can use multiple lines
// let multiLine = `This is a multi-line string.
// It can span multiple lines.
// This is the third line.`;
// console.log(multiLine);


//!-------------------------------------------------------------------------------------------------------------

// // data types in JavaScript
// // 1. Primitive data types
// // a. String
// let str = "Hello, World!";
// console.log(str);
// // b. Number
// let num = 42;
// console.log(num);
// // c. Boolean
// let isJavaScriptFun = true;
// console.log(isJavaScriptFun);
// // d. Null
// let emptyValue = null;
// console.log(emptyValue);
// // e. Undefined
// let undefinedValue;
// console.log(undefinedValue);
// // f. Symbol
// let sym = Symbol("unique");
// console.log(sym);

// // 2. Non-primitive data types
// // a. Object
// let person = {
//     name: "Alice",
//     age: 25,
//     city: "New York"
// };
// console.log(person);
// // b. Array
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// // c. Function
// function greet(name) {
//     return `Hello, ${name}!`;
// }
// console.log(greet("Alice"));


// let a = 10;
// let b = '10'; //type coercion happens here, b is a string but it will be converted to a number when compared with a
// console.log(a == b); // true, because == compares values after type coercion
// console.log(a === b); // false, because === compares both value and type without type coercion

// !-------------------------------------------------------------------------------------------------------------

// String
let userName = "Sumit";
console.log(userName);

// length property
console.log(userName.length); // returns the length of the string
// toUpperCase() method
console.log(userName.toUpperCase()); // converts the string to uppercase
// toLowerCase() method
console.log(userName.toLowerCase()); // converts the string to lowercase
// charAt() method
console.log(userName.charAt(0)); // returns the character at the specified index
// indexOf() method
console.log(userName.indexOf('m')); // returns the index of the first occurrence of the specified character
// lastIndexOf() method
console.log(userName.lastIndexOf('u')); // returns the index of the last occurrence of the specified character
// includes() method
console.log(userName.includes('mi')); // returns true if the string contains the specified substring
// startsWith() method
console.log(userName.startsWith('Su')); // returns true if the string starts with the specified substring
// endsWith() method
console.log(userName.endsWith('it')); // returns true if the string ends with the specified substring
// slice() method
console.log(userName.slice(1, 4)); // returns a portion of the string from the start index to the end index (not inclusive)
// substring() method
console.log(userName.substring(1, 4)); // returns a portion of the string from the start index to the end index (not inclusive)
// substring() method is deprecated and should not be used
// substr() method
console.log(userName.substr(1, 3)); // returns a portion of the string from the start index with the specified length
// replace() method
console.log(userName.replace('u', 'o')); // returns a new string with the specified value replaced
// split() method
console.log(userName.split('')); // splits the string into an array of substrings based on the specified separator
// trim() method
let userInput = "   Hello, World!   ";
console.log(userInput.trim()); // removes whitespace from both ends of the string
// repeat() method
console.log(userName.repeat(3)); // returns a new string that repeats the original string a specified number of times
// template literals
let greeting = `Hello, ${userName}!`; // allows for string interpolation and multi-line strings
console.log(greeting);
