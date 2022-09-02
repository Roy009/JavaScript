// Promises - A promise is an object that encapsulate the result of an asynchronous operation


function getUsers() {
    let users = [];
    setTimeout(() => {
      users = [
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ];
    }, 1000);
    return users;
  }
  
  function findUser(username) {
    const users = getUsers(); // A
    const user = users.find((user) => user.username === username); // B
    return user;
  }
  console.log(findUser('john')); // we will get undefined as a result because the getUser returns an empty array

// To resolve the above issue we can use a callback function

function getUsers2(callback) {
    setTimeout(() => {
      callback([
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ]);
    }, 1000);
  }
  
  function findUser2(username, callback) {
    getUsers2((users) => {
      const user = users.find((user) => user.username === username);
      callback(user);
    });
  }
  
  findUser2('john', console.log); // { username: 'john', email: 'john@test.com' }

// A promise object has 3 states - pending, fulfiled with a value, rejected for a reason.

// To create a promise object we use the Promise() constructor

// const promise = new Promise((resolve, reject) => {
//     if(success){
//         resolve(value);
//     } else {
//         reject(error);
//     }
// });

// Note - We will rarely create promise objects in practice. instead, we will consume promises provided by libraries

// we can consume a promise with the help of then, catch, finally method
// EX - then()
function getUsers3() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve([
                {usename:'Rohit', email:'rohit123@test.com'},
                {usename:'Roy', email:'roy123@test.com'},
            ]);
        }, 1000);
    }); 
}
function onfulfilled(users) {
    console.log(users);
}
const promise1 = getUsers3();
promise1.then(onfulfilled);


// To simulate the error
let success = false;
function getUsers4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(success) {
                resolve([
                    {username:'Rohit', email:'rohit123@test.com'},
                    {username:'Roy', email:'roy123@test.com'}
                ]);
            } else {
                reject('Failed to the user list');
            }
        }, 1000);
    });
}

function onFulfilled(users){
    console.log(users);
}
function onRejected(error){
    console.log(error);
}

const promise2 = getUsers4();
promise2.then(onFulfilled, onRejected);