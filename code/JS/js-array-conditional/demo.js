// string type variable
// var name = 'Fuad';
// var name2 = "Hasan" ;

// numeric type variable
// var mousePrice = 1300;
// var cGpa = 3.45;

// boolean type variable
// var isProjectDone = true;
// var mobileCharged = false;

/**
 * data type divide 2 catagories: 
 * 1. premitive : numeric string boolean null
 * 2. non-premitive : array loop condition
 */

/**
 * variable contains 5 things: 
 * keyWord variableName = dataType-data ;
 * when declare a variableName
 * not to start with - or number or _ or 
 * do not space between long variable name
 * 
 */

/**
 * operation:
 */
// var tablePrice = 1200; //assign
// var givenPrice = 3000;
// var total = givenPrice - tablePrice;
// var totalUpdate = total + 1000;

// declare Array: 
// var tableItems = ['calendar', 'laptop', 'mouse', 'noteBooks'];
// console.log(tableItems);

// find element-index no : 
// var findElements = tableItems.indexOf('mouse');
// console.log(findElements);

// get element from an array
// var getValue = tableItems[0];
// console.log(getValue);

// set new-element to an array:
// tableItems[2] = 'penholder' ;
// console.log(tableItems);

// add element to an array
// tableItems.push('lampSet');
// console.log(tableItems);

// remove element from an array
// tableItems.pop();
// console.log(tableItems);

// add element first to an array
// tableItems.unshift('notebooks');
// console.log(tableItems);

// remove element first from an array
// tableItems.shift();

// --------------------------------------------------
/**
 * Conditional, conditional-nested
 * > < >= <= == or === !=
 * && ||
 */


// if(tablePrice > 4000 && chairPrice == 4000){
//     console.log("do not buy this table, choose another one");
//     console.log("buy this chair");
// }
// else if(tablePrice <= 3500 && chairPrice > 3000){
//     console.log("book this table immediately");
//     console.log("Do not buy this table immediately");

// }
// else{
//     console.log("Do not buy anything");
// }
// var totalPrice = 10000;
// var tablePrice = 3500;
// var chairPrice = 4000;

// if(totalPrice <= 10000){
//     console.log('choose table & chair');
//     if(tablePrice >3500 && chairPrice > 5000){
//         console.log("not buy anything today");
//     }
//     else if(tablePrice > chairPrice || chairPrice !=4000){

//         console.log('just pick the chair');
//     }
//     else if(tablePrice <= 3500 && chairPrice == 4000){
//         console.log("Yay, lucky book these");
//     }
//     else{
//         console.log("Error");
//     }
    
// }

// var totalQuantity = 1;
// while(totalQuantity <= 30){
//     console.log(totalQuantity);
//     totalQuantity++;
// }

// // while loop reverse way
// var number = 10;
// while(number > 1){
//     console.log(number);
//     number-- ;
// }

// for(var i=0; i<=30; i++){
//     console.log(i);
//     i++ ;
// }

// for loop reverse way
// for(var i=30; i>=1; i--){
//     console.log(i);
// }

// Display all value in an array: 
// var i=0;
// while(i < tableItems.length){
//     var tableItem = tableItems[i];
//     console.log(tableItem);
//     i++ ;
// }

// for(var j = 0; j < tableItems.length; j++){
//     var Item = tableItems[j];
//     console.log(Item);
// }

// break
// for(var j = 0; j < tableItems.length; j++){
//     var Item = tableItems[j];
//     if(Item == 'mouse'){
//         break;
//     }
//     console.log(Item);
// }

// continue
// for(var j = 0; j < tableItems.length; j++){
//     var Item = tableItems[j];
//     if(Item == 'mouse'){
//         continue;
//     }
//     console.log(Item);
// }

/**
 * parseInt()
 * parseFloat()
 * toFixed()
 */


// var tableItems = ['calendar', 'laptop', 'mouse', 'noteBooks'];
// console.log(tableItems);

// var sliceElement = tableItems.slice(2, 4);
// console.log(sliceElement);

var name = 'Ariana Grande is singing' ;
var isName = name.includes('has');
console.log(isName);

var subString = name.subString('Grande');
console.log(subString);

