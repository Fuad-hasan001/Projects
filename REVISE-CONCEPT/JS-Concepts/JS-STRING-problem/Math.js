// .pow()
const numberPower = Math.pow(3, 8);
// console.log(numberPower)

// .abs: absolute
const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2); //(num1 - num2)
// console.log(gap)

if(gap < 5){
    // console.log('you win')
}
else{
    // console.log('I win')
}

// -------------------------------------
// Math.round(), ceil(), floor()

const cgpa = 3.45;
const result = Math.round(cgpa)
// console.log(result)

const result2 = Math.ceil(cgpa)
// console.log(result2)

const result3 = Math.floor(cgpa);
// console.log(result3)

// ---------------------------------------
const randomValue = Math.random();
// console.log(randomValue);

// Specific range
const randomValue2 = Math.random()*100;
// console.log(randomValue2);

// using for loop: 
for(let i=0; i < 20; i++){
    newRandomValue = Math.round(Math.random()*100)
    console.log(newRandomValue)
}
// ----------------------------------------------
// swap:
const number1 = 5;
const number2 = 7;

const temp = number1;
number1 = number2;
number2 = temp;

console.log(number1, number2)

// without temp
// destructuring
[number1, number2] = [number2, number1]
console.log(number1, number2)


