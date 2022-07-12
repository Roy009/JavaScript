// Arithmetic Operators

let sum = 10 + 10
console.log(sum); // 20
sum = sum + 20.67
console.log(sum); // 40.67
sum = sum - 10;
console.log(sum); // 30.67

// some exceptions
let x = '10'
let y = '10'
let z = 20
console.log(x + y); // 1010
console.log(z + y); // 2010
console.log(x * z); // 200
console.log(x / z); // 0.5

// Reminder Operator
console.log(5 % 2);  // 1
console.log(5 % -2); // 1
console.log(-5 % 2); //-1
console.log(-5 % -2);//-1
console.log(10 % 0); // NaN
console.log(Infinity % 2);// NaN
console.log(Infinity % Infinity); // NaN
console.log(10 % Infinity); // 10
console.log(0 % 10); // 0
console.log('10' % 3); // 1

// To get a Modulo the formula is
let dividend = 40
let divisor = 7

// Formula
const mod = (dividend,divisor) => ((dividend % divisor) + divisor % divisor);

console.log(dividend % divisor); // 5
console.log(mod(dividend, divisor)); // 5

// assignment operator

let a = 10, b = 20, c = 30
a = b = c; // a = 30, b = 30, c = 30

// Unary plus(+)
b = +a;
console.log(b); // 10
console.log(+x); // 10

let f = false , t = true;
console.log(+f); // 0
console.log(+t); // 1

// Comparison Operator

// greater than
console.log( 20 > 10); // true
// less than
console.log(20 < 10); // false
// equal to 
console.log(10 == 10); // true
// not equal to
console.log(20 != 10); // true

// Exception
console.log(10 < '20'); // true
console.log(10 == '10'); // true
console.log('10' === 10); // false

// logical operator
console.log(!true); // false
console.log(true || false); // true
console.log(true && false); // false

console.log( 20 && 10); // 10
console.log(10 || 10); // 10 

// Ternary Operators
let age = 20;
let message;
age >= 18 ? (message = "You can drive") : (message = "You cannot drive");
console.log(message);
