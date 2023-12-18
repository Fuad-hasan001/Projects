// let sum = 0;
// for (let i = 0; i <= 5; i++) {
//     sum = sum + i;
// }
// console.log('sum',sum);



// let decrement = 0;
// for(let i = 5; i>=1; i--){
//     decrement = decrement + i;
// }
// console.log('decrement', decrement);

function sum(i){

    console.log(i);
    return i + sum(i-1);
}
const result = sum(5);
console.log(result);
