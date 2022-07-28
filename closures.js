// Closures - A closure is a function that references varibles in the outer scope from its inner scope.
// basically the closure preserves the outer scope inside its inner scope

function message(){
    // inner scope varible
    let msg = 'Hi';
    // Closure function
    function sayHi() {
        console.log(msg);
    }
    return sayHi;
}
let greet = message();
greet(); // Hi 

// Closure example - 1
function greeting(message){
    return function (name){
        return message + ' ' + name; 
    }
}

let say = greeting('Hi');
let sayHello = greeting('Hello');

console.log(say('Rohit')); // Hi Rohit
console.log(sayHello('Aryan')); // Hello Aryan

// Closure in loop
for(let i = 1; i <= 3; i++){
    setTimeout(function(){
        console.log('after ' + i + ' second(s): ' + i);
    }, i * 1000);
}
// output - after 1 second(s): 1 after 2 second(s): 2 after 3 second(s): 3