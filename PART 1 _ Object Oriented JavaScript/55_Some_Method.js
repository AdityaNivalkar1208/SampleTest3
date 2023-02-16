// const numbers = [3, 5, 8, 9];

// kya ek bhi number esa hai jo even hai
// true

// const ans = numbers.some((number) => number % 2 === 0);
// console.log(ans);

const userCart = [
    { productId: 1, productName: "Mobile", price: 12000 },
    { productId: 2, productName: "Laptop", price: 22000 },
    { productId: 3, productName: "TV", price: 33000 },
    { productId: 4, productName: "MacBook", price: 250000 },
];

// const ans = userCart.some((number) => number.price > 10000);
// console.log(ans);

const user = userCart.find((number) => number.price > 100000);
console.log(user);