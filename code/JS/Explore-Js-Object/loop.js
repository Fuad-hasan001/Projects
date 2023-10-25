const numbers = [12, 54, 65, 3, 54];
/* for(const number of numbers){
    console.log(number);
} */

/* 
1.for..of can not used with objects
*/
const bottle = {
    color: 'yellow',
    price: 50,isCleaned: true,
    capacity: 1
}

/* 
1.loop through an object
*/
const keys = Object.keys(bottle);
// console.log(keys);

/* 3 ways to read object property
bottle.color //specifically know the property name
bottle['color] 
bottle[key] //bracket notation: variable er vitore property pabo
*/
for(const key of keys){
    // console.log(key);
    // console.log(key, bottle[key]);
}


// most of time use: loop through in an object
for(const key in bottle){
    // console.log(key, bottle[key]);
    const value = bottle[key];
    console.log(key, value);
}


// Advanced: 

const pair = Object.entries(bottle);
// console.log(pair);
for(const [key, value] of pair){
    console.log(key, value);
} 