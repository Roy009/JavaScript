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