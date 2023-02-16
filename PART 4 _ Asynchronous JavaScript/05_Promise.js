// promise reprents future value.
console.log('script start');
const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

const friedRicePromise = new Promise((resolve, reject) => {
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
        // resolve("Fried Rice");
        resolve({ value: "friedrice" });
    } else {
        reject(new Error("Something missing from bucket !!!"));
        // alert("Something missing from bucket");
    }
})

friedRicePromise.then((myfriedRice) => {
        // jeva promise resolve hoil teva 
        console.log("Let's eat ", myfriedRice);
    },
    // jeva promise reject hoil teva
    // (error) => {
    //     console.log(error);}
).catch((error) => {
    console.log(error);
    // alert("Something missing from bucket");
})

// setTimeout(() => {
//     console.log("Hello from setTimeout");
// }, 0);

// for (let i = 0; i <= 100; i++) {
//     console.log(Math.round(), i);
// }

console.log("script end");