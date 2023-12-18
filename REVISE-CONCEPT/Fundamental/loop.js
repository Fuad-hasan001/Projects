// In general 2 type loop: while() loop | for() loop

// declare

// while()
let i = 0;
while (i < 10) {
    // console.log(i)
    i++
}

// console.log("for loop")
for (let i = 0; i < 10; i++) {
    // console.log(i)
}

// console.log("reverse way: ")
// reverse way: 
let num = 10;
while (num > 0) {
    // console.log(num);
    num--;
}

for (num = 10; num > 0; num--) {
    // console.log(num)
}

// operations:
// even using for loop
for (let i = 0; i < 50; i++) {
    if (i % 2 === 0) {
        const evenNumber = i;
        // console.log('evenNumber: ', evenNumber)
    }
}

// odd using for loop
for (let i = 0; i < 50; i++) {
    if (i % 2 !== 0) {
        const oddNumber = i;
        // console.log('oddNumber:',oddNumber);
    }
}

// even using while loop
let num3 = 0;
while (num3 < 50) {
    if (num3 % 2 === 0) {
        const evenNumber = num3;
        // console.log('evenNumber: ', evenNumber)
    }
    num3++;
}

// odd using while loop
let num4 = 0;
while (num4 < 50) {
    if (num4 % 2 !== 0) {
        const oddNumber = num4;
        // console.log('oddNumber: ', oddNumber);
    }

    num4++;
}

// loop in array: run a loop for each element
const result = [33, 63, 85, 25, 45, 5];
console.log(result);

let num2 = 0
while (num2 < result.length) {
    const element = result[num2];
    // console.log(element);
    num2++
}


for (let i = 0; i < result.length; i++) {
    const element = result[i];
    // console.log(element)
}

// break & continue in for loop
console.log(' ');
for(let i=0; i<result.length; i++){
    const element = result[i]
    if(element === 25){
        break;
    }
    // console.log(element);
}

console.log(' ');
for(let j=0; j<result.length; j++){
    const element = result[j]
    if(element === 25){
        continue;
    }
    // console.log(element);
}

// reverse way 
for(let j=result.length; j > 0; j--){
    const element = result[j]
    if(element === 25){
        continue;
    }
    console.log(element);
}

// break & continue in while loop
// let k = 0;
// while(k < result.length){
//     const element = result[k]
//     if(element > 63){
//         break;
//     }
//     // console.log('element', element);
//     k++;
// }

// // console.log(" ");
// // let l=0;
// // while(l < result.length){
// //     const element2 = result[l]
// //     if(element2 === 25){
// //         continue;
// //     }
// //     console.log(element2)
// //     l++ ;
// // }


