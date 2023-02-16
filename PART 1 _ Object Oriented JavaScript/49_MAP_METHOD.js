const numbers = [3, 4, 1, 6, 8];

const square = function(number) {
    return number * number;
}

const squareNumber = numbers.map(square);
console.log(squareNumber);

const users = [
    { firstName: "Aditya", age: 21 },
    { firstName: "Acid", age: 01 },
    { firstName: "Uri", age: 19 },
    { firstName: "kashimi", age: 25 },
];

const first = function(users) {
    return users.firstName;
}

const nameFirst = users.map(first);
console.log(nameFirst);

// Map  :
// it takes input as a callback function 
// cannot change original array it create new array to store data in it


const project = [1, 2, 3];
const cube = function(cubeMade) {
    return cubeMade * cubeMade * cubeMade;
}

const projectOutput = project.map(cube);
console.log(projectOutput);