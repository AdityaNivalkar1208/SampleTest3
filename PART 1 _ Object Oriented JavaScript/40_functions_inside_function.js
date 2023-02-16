const app = () => {
    const myFunc = () => {
        console.log("Hello from myFunc");
    }
    myFunc();
    const addTwo = (num1, num2) => {
        return (num1 + num2);
    }
    console.log(addTwo(2, 3));
    console.log("inside app");
}
app();