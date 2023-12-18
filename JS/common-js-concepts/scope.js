/* bracket er vitor - block scope 
var use kora uchit na 
insisted, let const use korte hobe 
*hoisted */
function add(a, b){

}
add(5, 7);

let p = 'js'
let q = p;
p = 'react';
console.log('result', q);

const isTrue = 'false';
if(!isTrue){
    console.log("hello");
}
else{
    console.log('world');
}

function sum(p, q){
    p + q;
}
const result = sum(2, 3);
console.log(result);

if("2" === 2){
    console.log("inside if");
}
else{
    console.log("Inside else");
}

function work(x, y = 4){
    return x + y;
}
console.log(work(32));