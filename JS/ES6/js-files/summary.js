//* 1. optional chaining (?)

//*2. map, filter, find

//3. (optional): forEach, (advance)reduce

//*4. class 

//5. optional: inheritance, super

//*6. (must) prototypical inheritance
// ----------------------------------------------
// const obj = {
//     foo: 1
// };

// console.log(obj.bar = 2);
// function min(nums){
//     return Math.min(nums);
// }
// console.log(min([1, 3, 2]));
// const cube = x => x*x*x;
// console.log(cube(2));

// const[a,b] = [1, 2, 3, 4, 45, 5];
// console.log(a+b);

// const {x, y, z} = {x: 1, y1: 2, z: 3};
// console.log(y);

// const nums = [1, 2, 3, 4, 5];
// let output = nums.filter(n => n%2);
// console.log(output);

// const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];
// const output = friends.find(friend => friend.length == 5);
// console.log(output);

const products = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}
const {price} = products;
console.log(price);
