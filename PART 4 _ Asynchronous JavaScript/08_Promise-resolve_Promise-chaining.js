// const myPromise = Promise.resolve(5);
// myPromise.then(value => {
//     console.log(value);
// })

// then() it return Promise 

function myPromise() {
    return new Promise((resolve, reject) => {
        resolve("foo");
    })
}

myPromise().then((value) => {
    console.log(value);
    value += "hello";
    return value;
})

.then((value) => {
    console.log(value);
})