// methods
// function inside object 

// const person = {
//     firstName: 'John',
//     age: 34,
//     // gender: 'male',
//     // address: { homeAddress: '123456' },
//     about: function() {
//         console.log(`person name is ${this.firstName} and age is ${this.age}`); // we are using template string ``
//         //this keyword chi value runtime wegla execute hoto 
//         // this keyword : it print objects
//         console.log(this);
//     }
// }

// person.about();

// taking function outside of block
// const person1,person2,person3 are objects

function personInfo() {
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName: 'John',
    age: 8,
    about: personInfo
}

const person2 = {
    firstName: 'Johnny',
    age: 18,
    about: personInfo
}

const person3 = {
    firstName: 'Johnny',
    age: 17,
    about: personInfo
}

person1.about();
person2.about();
person3.about();