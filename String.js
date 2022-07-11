// Strings are primitive datatype, Strings are immutable 
// it means original string doesn't change if we modify then it will return new string

// Declaring String Variable
let str = "Hello";

//concatination
let name = str + ' Rohit' 
console.log(name);
str += " World"
console.log(str); // Hello World

// accesing String characters
console.log(str[2]); // l
console.log(str[str.length - 1]); // d

// String Length
console.log(str.length); // 10

// template string
let name1 = "Rohit"
let greet = `Hi ${name1}`
console.log(greet); // Hi rohit

// converting to string
let num = 111
let str1 = num.toString(); // '111'

// useful methods
let str2 = "Hello World";

console.log(str2.toUpperCase());
console.log(str2.toLowerCase());
console.log(str2.charAt(3));
console.log(str2.substring(0,5));
console.log(str2.substring(10,5));
console.log(str2.trim());
console.log(str2.slice(1,5));
console.log(str2.replace('World', 'Universe'));
