function hello() {
    console.log("hello");
}

// const hello = { key1: "value1" };
// const hello = ["value1"];

// javascript function ===> function + object

// console.log(hello.name);

// you can add your own properties
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property ----> tells function name ;

// function provides more useful properties

// function gives free space i.e. object and that object called prototype

// console.log(hello.prototype);
// only function provides prototype property

// if (hello.prototype) {
//     console.log("prototype is present !!!");
// } else {
//     console.log("prototype is not present");
// }


hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function() {
    return "lalalalal";
};

console.log(hello.prototype.sing());