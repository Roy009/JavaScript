// Declaring a varible 

// var 
var msg1 = "Hello World";
// let
let msg2 = "Hello World"
// const
const msg3 = "Hello World";

// Data Types

// Primitive

// null
let num1 = null;
console.log(num1);

// undefined
let num2;
console.log(num2);

// boolean
let num3 = true // or false
console.log(num3);

// number
let num4 = 12
let num5 = 12.54

console.log(typeof num4); // number
console.log(typeof num5); // number

console.log(Number.MAX_VALUE); // Infinity
console.log(Number.MIN_VALUE); // -Infinity

// bigint
let bignum = 183696938572584;
console.log(typeof (bignum)); // bigint 

// NaN
console.log('n' / 2); 

// String
let greeting = "Hello";
greeting += "World";
console.log(greeting); // Hello World 

// symbol
// creates a new unique value every time it get called
let s = Symbol(); 
console.log(typeof s); // Symbol


// complex

// object
let obj = {}; // empty object
let obj1 = {
    firstName : 'Rohit',
    lastName : 'Roy',
    // object inside object
    address: {
        city: 'Kolkata',
        state: 'WestBengal'
    }
};
console.log(obj1.firstName); // Rohit
console.log(obj1.lastName); // Roy
console.log(obj1.address.city); // kolkata
console.log(obj1.address.state); // WestBengal


