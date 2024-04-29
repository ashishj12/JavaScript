const numbers = [-1, 0, -20, 45, 3, 74, -5, 6];

// Filtering positive numbers
const positiveNumbers = numbers.filter(function (number) {
    return number > 0;
});

console.log(positiveNumbers);

//filter methods of array of objects

const products = [
    {
        id: 1,
        name: "Product A",
        price: 10
    },
    {
        id: 2,
        name: "Product B",
        price: 20
    },
    {
        id: 3,
        name: "Product C",
        price: 30
    },
];

const expensiveProducts = products.filter((product) => product.price > 15);

console.log(expensiveProducts);