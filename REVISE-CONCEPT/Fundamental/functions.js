// Declare a function
/* function functionName(){
    function body...

    return value / variable
}
// call function
sum() */

function sum(num1, num2){
    const sum = num1 + num2;

    return sum;
}
const sumResult = sum(100, 200);
// console.log(sumResult)


const assignment1 = 50;
const assignment2 = 60;
const assignment3= 55;

function average(num1, num2, num3){
    const sumOfNumber = num1 + num2 + num3;
    const averageNum = sumOfNumber / 3;

    return averageNum;
}

const result = average(assignment1, assignment2, assignment3);
// console.log('AssignmentMarks: ', result);
