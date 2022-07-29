// Creating Arrays

let arr = new Array(); // empty Array 
let arr1 = new Array(10); // empty Array with size 10
let arr2 = new Array(1,2,3,4,5); // Array with 5 elements
let arr3 = ['red','green','blue']; // Array of Strings

// Accessing Array Elements

let array = [1,2,3,4,5,6,7];
console.log(array[4]); // 5

// Changing element of the array

array[2] = 10; 
console.log(array); 

console.log(array.length); // 7

// push / pop / shift / unshift / indexOf / isArray 

array.push(8); // 1,2,10,4,5,6,7,8

array.pop(); // 1,2,10,4,5,6,7

array.shift(); // 2,10,4,5,6,7

array.unshift(); // 1,2,10,4,5,6,7

console.log(array.indexOf(2)); // 1

console.log(Array.isArray(array)); // true

// Traversing Array

for(let i = 0; i < array.length - 1; i++){
    console.log(array[i]);
} 

// Array Destructuring
function getScores(){
    return [70,80,90];
}
let [x,y,z] = getScores();
console.log(x); // 70
console.log(y); // 80
console.log(z); // 90
// Another way 
let[a,b, ...args] = getScores();
console.log(a); // 70
console.log(b); // 80
console.log(args); // 90