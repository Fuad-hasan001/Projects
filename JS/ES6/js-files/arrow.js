// function declaration
function add(first, second){
    const total = first + second;

    return total;
}

const value = 56;

// function expression
const add1 = function add1(first, second){
    const total = first + second;
    return total;
}

// function expression with anonymous function
const add2 = function (first, second){
    const total = first + second;
    return total;
}

const add3 = function (first, second){
    return first + second; 
}

// Arrow function: variable-name fn-expression => return value
const add6 = (first, second) => first + second; 

const result = add(10, 20);
console.log(result);

const getPie = () => 3.14;

// moe arrow js.
// muliple line arrow function 
// if you want to return something, use the return 
const add2Values = (first, second) => first + second;

const getFullName = (first, last) => first + ' ' + last;
const multiply = (a,b) => a * b;

const result2 = multiply(7 ,8);
console.log(result);

const doMath = (x, y, z) => {
    const firstSum = x + y;
    const second = y + z;

}