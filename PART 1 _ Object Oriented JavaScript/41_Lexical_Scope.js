// lexical scope : inside function madhe jr ti value sapadli nahi tr to main function madhe value find krto
function myApp() {
    const myVar = "value1";

    function myFunc() {
        // const myVar = "value59";
        console.log("inside myFunc", myVar);
    }
    // const myFunc2 = function myFunc() {}
    // const myFunc3 = () => {}
    console.log(myVar);
    myFunc();
}

myApp();