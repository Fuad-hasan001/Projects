/* 
truthy: 'almas', 5, true, {}, []
falsy: '', 0, false, null, undefined
*/

let myVar = 5;
if(myVar){
    myVar = myVar + 5;
}
else{
    myVar = myVar - 5;
}

let myMoney = 50;
// you check negative or falsy anything
// ! - means negative 
if(!myMoney){

}

const money = 80;
let food;
if(money > 100){
    food = 'biriyani';
}
else{
    food = 'cha biscuit' ;
}

// ternary (if-else-shortcut)
let food1 = money>100 ? 'biriyani' : 'cha biscuit' ;
console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water' ;
console.log(drink);

//number to string conversion
const num1 = 52;
const numStr = num1 + ''; //empty string add with num = string 
console.log(numStr);

// string to number conversion
const input = '560';
const inputNum = +input; //add + sign to convert num from string
console.log(inputNum);

//truthy value
const isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide User');
isActive ? showUser() : hideUser(); 

// shortcut
//use && if the left side is true then right side will be executed
isActive && showUser();

// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle boolean: true thankle false hobe but flse hoile true hobe
isActive = !isActive;