// JSON example
let person = {
    userName: "Sumit",
    age: 23,
    isMarried: false,
    skills: ["JavaScript", "Python", "C++"],
    greet: function() {
        console.log("Hello, I am " + this.userName);
    },
    address: {
        pin: 144411,
        city: "Jalandhar",
        state: "Punjab"
    },
    kids: undefined,
    ex:null,
    salary: 50000
}; 
console.log(person); // Output: person object
console.log(person.userName); // Output: Sumit
// converting Json to string
let personString = JSON.stringify(person);
console.log(personString); // Output: JSON string representation of the person object

// converting string back to JSON
let personJSON = JSON.parse(personString);
console.log(personJSON); // Output: person object (same as original)