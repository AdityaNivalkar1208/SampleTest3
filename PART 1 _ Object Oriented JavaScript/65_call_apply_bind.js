// function hello() {
//     console.log("Hello");
// }
// hello.call();

const user1 = {
    firstName: 'John',
    age: 21,
    about: function(hobby, favMusicians) {
        console.log(this.firstName, this.age, hobby, favMusicians);
    }
}

const user2 = {
    firstName: 'Cina',
    age: 22,
}

user1.about.call(user2, "guitar", "kk");


// // apply
user1.about.apply(user1, ["harmonium", "Arjit Singh"]);


// // bind
const ans = user1.about.bind(user2, "pakhwaj", "mohit chavan");
ans();