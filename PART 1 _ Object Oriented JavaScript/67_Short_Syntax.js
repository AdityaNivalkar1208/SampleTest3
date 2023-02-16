// const user1 = {
//     firstName: 'John',
//     age: 34,
//     about: function() {
//         console.log(this.firstName, this.age);
//     }
// }

// const myFunc = user1.about.bind(user1);
// myFunc();



// short syntax

const user = {
    firstname: 'aditya',
    lastname: 'nivalkar',
    id: '1208',
    college: 'Mumbai University',
    date_Of_Birth: '12-08-2001',
    age: 21,
    address: 'khed',
    about: function() {
        return `Mera clg ${this.college} and address is ${this.address}`;
    },
    is18: function() {
        if (this.age < 18) {
            console.log("You can't Vote !!!!");
        } else {
            console.log("You can Vote !!!!")
        }
    }
};

const aboutUser = user.about();
console.log(aboutUser);
const agen = user.is18();
console.log(agen);



// when we have create multiple users
// function (that function create object)
// 2.) add key value pair
// 3.) object la return karnar

function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function() {
            return `${this.firstName} is ${this.age} years old.`;
        },
        user.is18 = function() {
            return this.age >= 18;
        }

    user.info = function() {
        return "createUser Information";
    }
    return user;
}

const user1 = createUser('aditya', 'nivalkar', 'aditya@gmail.com', 21, "123");
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);
const info = user1.info();
console.log(info);

const user2 = createUser('ad', 'niva', 'apan@gmail.com', 21, "123");
const user3 = createUser('harry', 'mira', 'harry@gmail.com', 21, "123");