// sort method

// 0 : 48
// 9 : 57
// A : 65
// z : 90
// a : 97
// z : 


//  5,9,1200,400,3000
// 5,9,400,1200,3000
// const usernames = ["aditya", "yash", "banty", "acid", "jd"];
// usernames.sort();
// console.log(usernames);

// const numbers = [5, 9, 1200, 400, 3000];
// numbers.sort((a, b) => {
//     // return a - b;
//     return b - a;
// });
// console.log(numbers);
// console.log(numbers);


// 1200,410
// a-b --->790
// a-b --->positive (greater than 0)
// 410, 1200


// price LowToHigh HighToLow

const products = [
    { productId: 1, productName: 'p1', price: 100 },
    { productId: 2, productName: 'p2', price: 400 },
    { productId: 3, productName: 'p3', price: 300 },
    { productId: 4, productName: 'p4', price: 600 },
    { productId: 5, productName: 'p5', price: 500 },
]

// const lowTohigh = products.sort((a, b) => {
//     return a.price - b.price;
// });
// console.log(lowTohigh);

const highTolow = products.sort((a, b) => {
    return b.price - a.price;
});
console.log(highTolow);

const company = [85, 69, 74, 89, 6, 23, 5];
const company1 = company.sort((a, b) => {
    return a - b;
})
console.log(company1);