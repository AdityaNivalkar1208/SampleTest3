const userMethods = {
    about: function() {
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18: function() {
        return this.age >= 18;
    },
    sing: function() {
        return 'ohhh my babe';
    }
}

function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    user.sing = userMethods.sing;
    return user;
}

const user1 = createUser('aditya', 'nivalkar', 'aditya@gmail.com', 21, "123");
const user2 = createUser('harshit', 'js', 'harshit@gmail.com', 12, "456");
const user3 = createUser('harry', 'mira', 'harry@gmail.com', 20, "789");
console.log(user1.about());
console.log(user1.is18());
console.log(user2.about());
console.log(user2.is18());
console.log(user3.about());
console.log(user3.is18());

console.log(user1.sing());



// // multiple object trick
// obj1 madhe jr key3 value nasel ani aapan console.log(obj1.key3)  karun access kela tr undefined yeil 
// above statement solution
const obj1 = {
    key1: "value1",
    key2: "value2",
    // key4: " newKey"
}

const obj2 = Object.create(obj1);
// there is one more way to create empty Object
obj2.key3 = "value3";
// obj2.key4 = "newKey";
// console.log(obj2.key2);
console.log(obj2);

// const obj2 = {
//     key3: "value3"
// }

// console.log(obj1.key3)