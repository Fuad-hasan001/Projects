// array elements -> loop -> double : get result
const numbers = [2, 8, 4, 6, 3];
const output = [];
for(number of numbers){
    const doubled = number * 2;
    output.push(doubled);
}
// console.log(output);

function getDoubles(numbers){
    const output = [];
    for(number of numbers){
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}

// function doubleIt(number){
//    return number * 2;
// }
// same things using arrow function
const doubleIt = num => num * 2;

const result = getDoubles(numbers);
console.log(result);

/* 
purpose: 
1. get an array
2. for every elements of the array do something
3. store the result in an array
4. return the result array
*/
const makeDouble = numbers.map()