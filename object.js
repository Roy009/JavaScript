// An object is an unordered collection of key-value pairs, each pair is called property

// empty object
let obj = {}

// key-value pair
let student = {
    firstName: "Rohit",
    lastName: "Roy",
    roll: 31
}

console.log(student);

// Accessing Properties
console.log(student.firstName); // Rohit
console.log(student['lastName']); // Roy
console.log(student['roll']); // 23

// changing values

student.roll = 20
console.log(student['roll']); // 20

// deleting element 
delete student.roll; 
console.log(student);

// nested objects 
let obj1 = {
    id: 1,
    Name: {
        firstName: 'Rohit',
        lastName: 'Roy'
    }
}
console.log(Name); // { firstName:'Rohit', lastName:'Roy' }
console.log(firstname); // Rohit
console.log(lastName); // Roy

// checking if a property exists
console.log('firstName' in student); // true

// function inside the object
let person = {
    firstName: "Rohit",
    lastName: "Roy",
    greet: function(){
        console.log('Hello');
    },
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(person.getFullName); // Rohit Roy

// Object.value()
const val = Object.values(person);
console.log(val); 

// object destructuring

let studentInfo = {
    Name : 'Rohit Roy',
    Roll: 31,
    group: 'A' 
}

let {studentName, studentRoll, studentGroup} = studentInfo;
console.log(studentName); // Rohit Roy
console.log(studentRoll); // 31
console.log(studentGroup); // A

// Optional chaining operator
function getUser(id) {

    if(id <= 0) {
        return null;
    }
    return {
        id: id,
        username: 'admin',
        profile: {
            avatar: '/avatar.png',
            language: 'English'
        }
    }
}


let user = getUser(1)
let profile = user.profile;
console.log(profile); // { avatar: '/avatar.png', language: 'English' }

// To access a property of an object using the optional chaining operator 
let name = user ?. username; 
console.log(name); // admin