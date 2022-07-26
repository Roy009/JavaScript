// Javascript class encapsulate data and function that manipulate data and it is a blueprint for creating objects

// class declaration
class Person {
    // constructor function
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

let rohit = new Person('Rohit');
console.log(rohit); // Person { name : Rohit }
let name = rohit.getName();
console.log(name); // Rohit

// instanceof
console.log(rohit instanceof Person); // true
console.log(rohit instanceof Object); // true

// Getter and Setter
class student {
    constructor(name){
        this.setName(name);
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        newName = newName.trim();
        if(newName === ''){
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }
}
let student1 = new student('student1');
console.log(student1); // student { name: 'student1' }
student1.setName('Rohit');
console.log(student1.getName()); // Rohit

// class expression in a variable declaration
let Person1 = class{
    constructor(name){
        this.name = name;
    }
    getName() {
        return this.name;
    }
} 
let person = new Person1('Rohit')
console.log(person.getName()); // Rohit


// Singleton class - It ensures that only one instance of a class can be created throughout the system
 
let application = new class {
    constructor(name){
        this.name = name
    }
    start() {
        console.log(`Starting the ${this.name}...`);
    }
}('Awesome App');


application.start() // Starting the Awesome App...

// inheritance
// Base/Parent class
class Vehicle{
    constructor(speed){
        this.speed = speed;
    }
    drive(){
        console.log('The speed of the car is ' + this.speed);
    }
}
// Derived/Child class
class car extends Vehicle {
    constructor(speed) {
        super(speed);
    }
    accelarate(){
        console.log('Accelarating.....');
    }
}

let mustang = new car(230);
mustang.drive(); // The speed of the car is 230
mustang.accelarate(); // Accelarating.....


