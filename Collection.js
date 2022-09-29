// Map - A map object holds key-value pairs.keys are unique in Map's collection
let john = {name:'John Doe'}, 
lily = {name:'Lily Bush'}, 
peter = {name:'Peter Drucker'};

let map = new Map([
    [john,'admin'],
    [lily, 'editor'],
    [peter,'subscriber']
]);
let rohit = {name:'Rohit roy'}
console.log(map.get(john));//admin
console.log(map.get(lily));//editor
console.log(map.get(peter));//subscriber

console.log(map.has(peter)); //true
console.log(map.has(rohit)); //false

map.set(john,'23');
map.set(lily,'24');
map.set(peter,'25');

console.log(map.get(john)); // 23
console.log(map.get(lily)); // 24
console.log(map.get(peter));// 25