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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { usename: 'Rohit', email: 'rohit123@test.com' },
        { usename: 'Roy', email: 'roy123@test.com' },
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
      if (success) {
        resolve([
          { username: 'Rohit', email: 'rohit123@test.com' },
          { username: 'Roy', email: 'roy123@test.com' }
        ]);
      } else {
        reject('Failed to the user list');
      }
    }, 1000);
  });
}

function onFulfilled(users) {
  console.log(users);
}
function onRejected(error) {
  console.log(error);
}

const promise2 = getUsers4();
promise2.then(onFulfilled, onRejected);

//  Promise Chaining

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 300);
});

p.then((result) => {
  console.log(result);
  return result * 2
}).then((result) => {
  console.log(result);
  return result * 3;
}).then((result) => {
  console.log(result);
  return result * 4;
})
console.log(p);

// Promise.all() Mehtod - Used for iterables of promises

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The First promise has resolved');
    resolve(10);
  }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The Second promise has resolved');
    resolve(20);
  }, 2 * 1000);
});const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The Thrid promise has resolved');
    resolve(30);
  }, 3 * 1000);
});

Promise.all([p1,p2,p3]).then((reuslts) => {
  const total = reuslts.reduce((p, c) => p + c);
  console.log(`Result: ${reuslts}`);
  console.log(`Total: ${total}`);
});


// Promise.race() - 

const p4 = new Promise((resolve,reject) => {
  setTimeout(() => {
    console.log('The First promise has resolved');
    resolve(10);
  }, 1000);
});
const p5 = new Promise((resolve,reject) => {
  setTimeout(() => {
    console.log('The Second promise has resolved');
    reject(20);
  }, 2000);
});

Promise.race([p1,p2]).then(value => console.log(`Resolved: ${value}`)).catch(reason => console.log(`Rejected: ${reason}`));


