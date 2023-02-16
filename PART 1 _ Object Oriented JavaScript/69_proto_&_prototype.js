// __proto__  : object ka reference

// official ecmascript documentation is [[prototype]]

// [[prototype]]

// __proto__, [[prototype]]


//  prototype

// const obj1 = {
//     key1: "value1",
//     key2: "value2",
// };

// const obj2 = Object.create(obj1); // meaning of this line 

// obj2.key3 = "value3";
// console.log(obj2);

// console.log(obj2.__proto__);



// // previous problem answers

// const userMethods = {
//     about: function() {
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18: function() {
//         return this.age >= 18;
//     },
//     sing: function() {
//         return 'ohhh my babe';
//     }
// }

// function createUser(firstName, lastName, email, age, address) {
//     const user = Object.create(userMethods);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;

//     return user;
// }

// const user1 = createUser('aditya', 'nivalkar', 'aditya@gmail.com', 21, "123");
// const user2 = createUser('harshit', 'js', 'harshit@gmail.com', 12, "456");
// const user3 = createUser('harry', 'mira', 'harry@gmail.com', 20, "789");

// console.log(user1.about());
// console.log(user1.is18());
// console.log(user2.about());
// console.log(user2.is18());
// console.log(user3.about());
// console.log(user3.is18());

// console.log(user1.sing());


// using prototype

// const userMethods = {
//     about: function() {
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18: function() {
//         return this.age >= 18;
//     },
//     sing: function() {
//         return 'ohhh my babe';
//     }
// }

function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    return user;
}
console.log(createUser.prototype);
createUser.prototype.about = function() {
        return `${this.firstName} is ${this.age} years old.`;
    },
    createUser.prototype.is18 = function() {
        return this.age >= 18;
    },
    createUser.prototype.sing = function() {
        return 'ohhh my babe';
    }

const user1 = createUser('aditya', 'nivalkar', 'aditya@gmail.com', 21, "123");
const user2 = createUser('harshit', 'js', 'harshit@gmail.com', 12, "456");
const user3 = createUser('harry', 'mira', 'harry@gmail.com', 20, "789");

console.log(user1);
console.log(user1.sing());
console.log(user1.is18());