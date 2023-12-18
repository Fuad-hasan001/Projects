//  8 ways to get undefined 
/* 
1. variable that is not initialized will give you undefined
2. function with no return 
3. parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefined
5. property that does not exists on an object will give you undefined
6. accessing array elements outside of the index
7. deleting an element inside an array
8. set a value directly to undefined

*/
//1
let first;
console.log('first', first);
//2
function second(a, b){
    const total = a + b;
}
const result = second(2, 5);
console.log(result);

//3
function halim(a, b, c, d){
    const total = a+ b+ c+ d;
    console.log(total);
}
halim(1, 2);

//4


