"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello, TypeScript!");
//! Type inference
// Typescript can infer the type of a variable based on its initial value.
// let a=10; // redeclared variables cannot be assigned a different type
// a=20;
// let userName="Sumit"; // inferred as string
// // userName=30; // Error: Type 'number' is not assignable to type 'string'
// let marks=undefined;
// marks=10;
// marks='s'; // No error, type is inferred as any
// let child=null;
// child=10;
// child='s'; // No error, type is inferred as any
// !Type annotation
let userName = "Sumit"; // explicitly annotated as string
userName = "John"; // valid
// userName = 30; // Error: Type 'number' is not assignable to type 'string'
let age = 30; // explicitly annotated as number
let isLoggedIn = true; // explicitly annotated as boolean
let a = undefined;
let b = null;
console.log(a); // Output: undefined
console.log(b); // Output: null
//  b=30; // type 30 cannot be assigned to type null
//  a=10; // type 10 cannot be assigned to type undefined
// !Functions
function add2(a, b) {
    return a + b;
}
console.log(add2(5, 10)); // Output: 15
// optional parameters
function add(a, b) {
    return 4;
}
;
console.log(add(5, 6));
// only 1 parameter, either string or number
function userId(id) {
    // console.log(id);
    // id.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'string | number'.
    // type narrowing
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
userId(123); // Output: 123
userId("abc"); // Output: ABC
// !Arrays
// let arr=[10,'Sumit',true]; // inferred as (string | number | boolean)[]
// console.log(arr); // Output: [10, 'Sumit', true]
// annotation
let arr = ["Sumit", "John", "Alice"]; // array of strings
console.log(arr); // Output: ['Sumit', 'John', 'Alice']
let arr2 = [10, "Sumit", "John", 20]; // array of numbers and strings
console.log(arr2); // Output: [10, 'Sumit', 'John', 20]
// !Tuples ------ > fixed length array with specific types
let tuple = ["Sumit", "John", "Alice"]; // inferred as string[]
console.log(tuple); // Output: ['Sumit', 'John', 'Alice']
// readonly 
let tuple2 = ["Sumit", 30]; // tuple with string and number
console.log(tuple2); // Output: ['Sumit', 30]
// tuple2[0] = "John"; // Error: Cannot assign to '0' because it is a read-only property.
//# sourceMappingURL=script.js.map