// Aim : sum of all elements
// const numbers = [1, 2, 3, 4, 5];

// const ans = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });

// console.log(ans);


// accumulator , currentValue , return
//  1                2            3 
//  3                3            6
//  6                4            10
//  10               5            15
//  15               10           25


const userCart = [
    { productId: 1, productName: "Mobile", price: 12000 },
    { productId: 2, productName: "Laptop", price: 22000 },
    { productId: 3, productName: "TV", price: 33000 },
];

const ans = userCart.reduce((totalPrice, CurrentProduct) => {
    return totalPrice + CurrentProduct.price;
}, 0);

console.log(ans);