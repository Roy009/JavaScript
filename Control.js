// Control statements

// if-else Statements

// Syntax  

// if(Condition) {

// } else {

// }

let age = 18;

if(age >= 18){
    console.log('You can drive');

} else {
    console.log('You cannot drive');

}

// if - else if - else statements

// Syntax

// if(condition1){

// }else if(condition2){

// }else{

// }

let day = 'Sunday';

if(day === 'Monday'){
    console.log('Its Monday');

}else if(day === 'Tuesday'){
    console.log('Its Tuesday');

}else if (day === 'Wednesday'){
    console.log('Its Wednesday');

}else if(day === 'Thrusday'){
    console.log('Its Thursday');

}else if(day === 'Friday'){
    console.log('Its Friday');

}else if(day === 'Saturday'){
    console.log('Its Weekend');

}else if(day === 'Sunday'){
    console.log('Its Weekend');

}else{
    console.log('invalid');
}

// Ternary Operator

let isAuthenticated = true

let access = isAuthenticated ? 'You will redirect to dashboard' : 'Access Denied';
console.log(access); // 'You will redirect to dashboard'

let speed = 90;
let message = speed >= 120 ? 'Too Fast' : speed >= 80 ? 'Fast' : 'OK';

console.log(message); // Fast 

// Flow Control statements

// switch statements

// Syntax 

// switch (expression) {
//     case value1:
//         statement1;
//         break;
//     case value2:
//         statement2;
//         break;
//     case value3:
//         statement3;
//         break;
//     default:
//         statement;
// }

let dayNo = 3;
let dayName;

switch (dayNo) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}

console.log(dayName); // Tuesday


// While loop

// Syntax 

// while (expression) { }

let i = 0;

while(i < 10){
    console.log(i);
    i += 1;
} // 0 1 2 3 4 5 6 7 8 9


// do while

// Syntax

// do {
//     statement;
//   } while(expression);

let count = 0;
do {
  console.log(count);
  count++;
} while (count < 5) // 0 1 2 3 4


// for loop

// Syntax

// for (initializer; condition; iterator) { }

for (let j = 1; j < 5; j++) {
    console.log(j);
} // 1 2 3 4

for (let z = 2; ; z += 2) {
    console.log(z);
    if (z > 10) {
      break;
    }
} //  2 4 6 8 


  

  
