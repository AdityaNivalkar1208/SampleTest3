// object 
// react

const person = {
    firstName: 'John',
    gender: 'Male',
}

// function printDetails(obj) {
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     // console.log(obj.geer);
// }


// using destructuring method
function printDetails({ firstName, gender }) {
    console.log(firstName);
    console.log(gender);
    // console.log(obj.geer);
}

printDetails(person);