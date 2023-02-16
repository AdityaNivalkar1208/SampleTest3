// function createUser(firstName, age) {
//     this.firstName = firstName;
//     this.age = age;
// }

// createUser.prototype.about = function() {
//     console.log(this.firstName, this.age);
// }

// const user1 = new createUser("aditya", 6);
// // new keyword
// // 1.) empty object this = {}
// // 2.) return this
// // 3.) Object.create(createUser.prototype);
// user1.about();

//this is constructor function
function CreateUser(firstName, lastName, email, age, address) {
    // const user = Object.create(createUser.prototype);
    // user.firstName = firstName;
    this.firstName = firstName;
    // user.lastName = lastName;
    this.lastName = lastName;
    // user.email = email;
    this.email = email;
    // user.age = age;
    this.age = age;
    // user.address = address;
    this.address = address;
    // return user;
}
console.log(CreateUser.prototype);
CreateUser.prototype.about = function() {
        return `${this.firstName} is ${this.age} years old.`;
    },
    CreateUser.prototype.is18 = function() {
        return this.age >= 18;
    },
    CreateUser.prototype.sing = function() {
        return 'ohhh my babe';
    }

const user1 = new CreateUser('aditya', 'nivalkar', 'aditya@gmail.com', 21, "123");
const user2 = new CreateUser('harshit', 'js', 'harshit@gmail.com', 12, "456");
const user3 = new CreateUser('harry', 'mira', 'harry@gmail.com', 20, "789");

// console.log(user1);
// console.log(user1.sing());
// console.log(user1.is18());

for (let key in user1) {
    console.log(key);

    if (user1.hasOwnProperty(key)) {
        console.log(key);
    }
}