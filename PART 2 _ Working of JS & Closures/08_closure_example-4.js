function func() {
    let counter = 0;
    return function() {
        if (counter < 1) {
            console.log("Hi, You called me!");
            counter++;
        } else {
            console.log("Mai already ek bar call ho chuka hoon! ");
        }
    }
}

const myFunc1 = func();
myFunc1();
myFunc1();

const myFunc2 = func();
myFunc2();
myFunc2();