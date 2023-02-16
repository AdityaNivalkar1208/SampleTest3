// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     //     setName(firstName, lastName) {
//     //         this.firstName = firstName;
//     //         this.lastName = lastName;
//     //     }

//     set fullName(fullName) {
//         const [firstName, lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// const person1 = new Person("Aditya", "Nivalkar", 5);
// console.log(person1);
// // console.log(person1.fullName); // if we write get then dont need to apply parentheses in person1.firstName
// console.log(person1.firstName);
// console.log(person1.lastName);

// // person1.setName("John", "cina");
// // console.log(person1.firstName);
// // console.log(person1.lastName);

// person1.fullName = "John cina";
// console.log(person1);