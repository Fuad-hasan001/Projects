// Math
// Math.pow = power
const result = Math.pow(3, 8);
// console.log(result);

const num1 = 25;
const num2 = 45;
const gap = num1 - num2;
console.log(gap);
if(gap < 5){
    console.log('you guys can be friends');
}
else{
    console.log('you guys stay apart');
}
// round
const number = 2.451245;
const fullNumber = Math.round(number);
console.log(fullNumber);
// ceil, floor
const result2 = Math.ceil(2.0001);
const result3 = Math.floor(456.259);
console.log(result3);

// random value
// console.log(Math.random());
// const random = Math.round(Math.random()*100);
// console.log(random);

// for (let i = 0; i < 20; i++) {
//     const random = Math.round(Math.random()*6);
//     console.log(random);
    
// }

const value = Math.floor(13.67);
console.log('value:',value);

function add(a,b){
    return a+b;
}
console.log(add("adam" + "eve"))