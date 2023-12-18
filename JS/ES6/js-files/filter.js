const numbers = [12, 5, 45, 11, 18, 9, 55, 61, 1];
const bigNums = numbers.filter(number => number > 20);
const tiny = numbers.filter(n => n < 10);
const even = numbers.filter(num => num % 2);
// console.log(bigNums);
// console.log(tiny);
// console.log(even);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 80000},
    {id: 3, name: 'watch', price: 5000},
    {id: 4, name: 'tablet', price: 235000}
];

// const expensive = products.filter(product => product.price > 1000000);
const expensive = products.filter(product => product.price < 100);
console.log(expensive);