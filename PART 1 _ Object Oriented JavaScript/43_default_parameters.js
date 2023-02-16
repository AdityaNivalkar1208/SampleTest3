// yat aapan eka parameter chi value default value mhanun set kele here b=1


function addTwo(a, b) {
    if (typeof b === "undefined") {
        b = 1;
    }
    return a + b;
}
const two = addTwo(1);
console.log(two);