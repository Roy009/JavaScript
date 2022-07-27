// Function Declaration

// Syntax 

// function FunctionName(parameters){
//     function body
// }


function greet(message){
    console.log(message);
}

// Calling Function
greet('Hello') // Hello

// Returning a value
function sum(a, b){
    return a + b;
}
let result = sum(10,34);
console.log(result);

// Passing function to another function
function average(a,b, fn){
    return fn(a,b) / 2;
}
let ans = average(45,67,sum);
console.log(ans); // 56 

// Anonymous Function

// Syntax
// (function () { });
let answer = function() {
    console.log('I am a anonymous function');
}

answer(); // I am a anonymous function

// Arrow Function

let show = () => console.log('It is a Arrow Function');
let add = (a,b) => console.log(a + b);
show(); // It is a Arrow Function
add(89,43); //132


//  Recursive Function
function sum1(n) {
    if(n <= 1) {
        return n;
    }
    return n + sum(n - 1);
}
console.log(sum(23,54)); // 77

// Function methods

// apply -  The apply method allows you to call a function with a given this value and argument provided as an array
const person = {
    firstName: 'Rohit',
    lastName:'Roy'
}
function greet(greeting, message){
    return `${greeting} ${this.firstName} ${message}`;
}
let greetings = greet.apply(person, ['Hello','How are you?'])
console.log(greetings); // Hello Rohit How are you?

// bind - The bind() method returns a new function, when invoked,has its this sets to a specific value.

let car = {
    speed: 5,
    start: function() {
        console.log('Start with ' + this.speed + ' km/h');
    }
}

let aircraft = {
    speed: 10,
    fly: function() {
        console.log('Flying');
    }
}

// applying bind method
let taxiing = car.start.bind(aircraft);

taxiing(); // Start with 10 km/h

// call - The call() method calls a function functionName with the arguments(arg1,arg2,...) into it and the this set to the thisArg object inside the function

function add(x, y){
    return x + y;
}

let result2 = add.call(this, 34, 65);
console.log(result2);  // 99