function myFunc(a) {
    // console.log(a);
    console.log("hello");
}

function myFunc2() {
    console.log("inside my func2");
}

function myFunc3() {
    console.log("inside my func3");
}

// myFunc({ name: "hello" });
(myFunc(myFunc2)); // <-- call back function
(myFunc2(myFunc3)); // <-- call back function