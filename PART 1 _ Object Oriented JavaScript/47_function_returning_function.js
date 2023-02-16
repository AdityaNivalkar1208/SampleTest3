// function myFunc() {
//     return { name: 'aditya' };
// }

// const ans = myFunc();
// console.log(ans);


function myFunc() {
    function help() {
        return "hello world!";
    }
    return help;
}

const ans = myFunc();
console.log(ans());