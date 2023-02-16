// const numbers = [2, 4, 6, 8, 10];

// const ans = numbers.every((number) => number % 2 === 0);
// console.log(ans);

const userCart = [
    { productId: 1, productName: "Mobile", price: 12000 },
    { productId: 2, productName: "Laptop", price: 22000 },
    { productId: 3, productName: "TV", price: 23000 },
];

// check every product < 30000

const user = userCart.every((product) => product.price < 30000);
console.log(user);