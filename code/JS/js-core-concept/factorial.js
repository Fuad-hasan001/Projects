// let sum = 0;
// for (let i = 0; i <= 7; i++) {
//     const element = array[i];
//     sum = sum + i;
//     console.log(i, sum);

// }
/** 
function factorial(number){
    let result = 1;
    for(let i=1; i<=7; i++){
        result = result * i;
    }
    return result;
}

const result = factorial(7);
console.log(result);
*/
// function sumOfNumber(number) {
//     let sum = 0;
//     for (let i = number; i>=0; i--) {
//         sum = sum + i;
//         console.log('sum', i, sum);
//     }
//     // console.log('sum', sum);

//     return sum;
// }
//  const result1 = sumOfNumber(7);

function factorial(number){
    let result2 = 1;
    for(let i=number; i>=1; i--){
        result2 = result2 * i;
        console.log('result2: ', i, result2);
    }
    return result2;
}
const result2 = factorial(7);
console.log(result2);


function multiplicationOfNumber(number) {
    let multiplication = 1;
    for (let i = 1; i <= 7; i++) {
        multiplication = multiplication * i;
        console.log('multiplication', i, multiplication);
    }
    return multiplication;
}
const result = multiplicationOfNumber(7);
console.log(result);
