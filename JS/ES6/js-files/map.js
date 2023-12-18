/**  map = morph(modify) array piece-by-piece
 * at first array 
 * operation on array element
 * result show in array
 */
/*
const numbers = [12, 56, 87, 44];

const half = numbers.map(n => n/2);
const thirds = numbers.map(x => x/3);
// console.log(half);
// console.log(thirds);

const friends = ['tabi', 'tabi', 'tabi', ];
const firstLetters = friends.map(friend => friend[0]);
// console.log(firstLetters);

const nameLength = friends.map(friend => friend.length);
console.log(nameLength);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 80000},
    {id: 3, name: 'watch', price: 5000},
    {id: 4, name: 'tablet', price: 235000}
];

// const items = products.map(product => console.log(product.name));
const items = products.map(product => product.name);
const prices = products.map(p => p.price);
console.log(items);
console.log(prices);
*/
/*
// ----------------------------------------------------
// no need any return
// map alternate-> forEach
const friends1 = ['tabi', 'tabi', 'tabi', ];

friends1.forEach(friend => console.log(friend));

const products1 = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 80000},
    {id: 3, name: 'watch', price: 5000},
    {id: 4, name: 'tablet', price: 235000}
];

 products1.forEach(product => console.log(product));
*/

// ------------------------------------------------------------
// filter
const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNums = numbers.filter(number => number > 20);
console.log(bigNums);

const tiny = numbers.filter(n => n < 10);
console.log(tiny);
