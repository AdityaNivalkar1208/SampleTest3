// 2015 / es6
// class keyword
// class are fake

// class CreateUser {
//     constructor(firstName, lastName, email, age, address) {
//         console.log("constructor called");
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.address = address;
//     }
//     about() {
//         return `${this.firstName} is ${this.age} years old.`;
//     }
//     is18() {
//         return this.age >= 18;
//     }
//     sing() {
//         return 'ohhh my babe';
//     }
//     func(a) {
//         console.log(a);
//     }
// }


// const user1 = new CreateUser('aditya', 'nivalkar', 'aditya@gmail.com', 21, "123");
// const user2 = new CreateUser('harshit', 'js', 'harshit@gmail.com', 12, "456");
// const user3 = new CreateUser('harry', 'mira', 'harry@gmail.com', 20, "789");
// console.log(Object.getPrototypeOf(user1));
// console.log(user1.firstName);
// console.log(user1.sing());
// console.log(user1.is18());

// user1.func("Aditya");

// for (let key in user1) {
//     console.log(key);

//     if (user1.hasOwnProperty(key)) {
//         console.log(key);
//     }
// }

function CreateUser(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
CreateUser.prototype.about = function() {
    return `${this.firstName} ${this.lastName}`;
}


const user1 = new CreateUser('aditya', 'nivalkar', 21);
console.log(user1.about());