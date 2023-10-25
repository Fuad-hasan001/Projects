/*
function functionName(params/argument) {
    // function body
    // return;
}

//functionName(params) 
var returnedValue = functionName(params value);
*/

/*
function getAverage(assign1, assign2, assign3) {
    const total = assign1 + assign2 + assign3;
    const average = total / 3;
    return average;
    
}

const assign1Marks = 60;
const assign2Marks = 58;
const assign3Marks = 59;

var myAverage = getAverage(assign1Marks, assign2Marks, assign3Marks);
console.log('myAverage so far', myAverage);
*/

function getAverage(Assignment1, Assignment2, Assignment3) {
    const total = Assignment1 + Assignment2 + Assignment3;
    const average = total / 3;
    return average;
}

const assign1Marks = 60;
const assign2Marks = 58;
const assign3Marks = 59;
var myAverage = getAverage(assign1Marks, assign2Marks, assign3Marks);
console.log('myAverage: ', myAverage);
