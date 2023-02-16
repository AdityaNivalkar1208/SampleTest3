// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


//  different between maps and objects

// objects can only have string or symbol keys
// as key

// in maps you can use anything as key
// like array, number, string   

// Object Literal
// key --> String
// key ---> Symbol
// const person = {
//     firstName: 'John',
//     age: 34,
//     1: "one"
// }
// console.log(person.firstName)

// for (let key in person) {
//     console.log(typeof key)
// }


// key value pair

// const person = new Map();
// person.set('firstName', 'John');
// person.set('age', 34);
// person.set('1', 'one');
// person.set([1, 2, 3], 'onetwothree');
// person.set({ 1: 'one' }, 'onetwo');
// console.log(person);
// // console.log(person.get(1));
// for (let key of person.keys()) {
//     console.log(key, typeof key);
// }

// for (let key of person) {
//     console.log(key);
//     console.log(Array.isArray(key));
// }

// // using destructuring
// for (let [key, value] of person) {
//     console.log(key, value);
// }


// add extra info using map
const person1 = {
    id: 1,
    firstName: 'John',
}
const person2 = {
    id: 2,
    firstName: 'sina',
}


const userInfo = new Map();
userInfo.set(person1, { age: 30, gender: 'male' });
userInfo.set(person2, { age: 22, gender: 'female' });
// console.log(userInfo);

// const ans = userInfo.get(person1).age;
// console.log(ans);
console.log(userInfo.get(person1));
console.log(userInfo.get(person2));
console.log(userInfo.get(person1).gender);
console.log(userInfo.get(person2).gender);


// const person = new Map([
//     ['firstName', 'Aditya'],
//     ['age', '18']
// ]);
// console.log(person);