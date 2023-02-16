class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating.`;
    }

    isSuperCute() {
        return this.age <= 1;
    }

    isCute() {
        return true;
    }
}

const animal1 = new Animal("Dog", 2);
console.log(animal1);

console.log(animal1.eat());
console.log(animal1.isSuperCute());
console.log(animal1.isCute());


// inheritance

// class Dog {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     eat() {
//         return `${this.name} is eating.`;
//     }

//     isSuperCute() {
//         return this.age <= 1;
//     }

//     isCute() {
//         return true;
//     }
// }

// // make object 
// const tommy = new Dog("Tommy", 3);
// console.log(tommy);