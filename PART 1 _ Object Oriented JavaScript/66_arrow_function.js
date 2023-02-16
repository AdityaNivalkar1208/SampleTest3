// arrow function madhe this keyword surrounding madhun gheto
const user1 = {
    firstName: 'John',
    age: 34,
    about: () => {
        console.log(this.firstName, this.age);
    }
}

user1.about(user1);