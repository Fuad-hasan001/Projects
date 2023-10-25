// index diye array access kora jayy

var numbers =    [45, 68, 78, 56, 89, 98];
//index/position:  0   1   2   3   4   5


// How to access: 
// get Elements By Index: directly get index value
// console.log(numbers[3]);
// ------------------------------------------------

// get element value by index
// take value from array and put in the newVariable
//var newVariableName = ArrayName[indexNo];
var element = numbers[1];
// console.log(element);
// -------------------------------------------------

// set element value by index
// Array index value change/update
// ArrayName[indexNo] = updateValue
numbers[1] = 77;
numbers[3] = 44;
// console.log(numbers);
// ----------------------------------------------------

// find index of an elements:
// from the no of array give me the index of 89
var positionIndex = numbers.indexOf(89);
console.log(positionIndex);

// find the position of value which is not in an array
var positionIndex = numbers.indexOf(188);
console.log(positionIndex);

