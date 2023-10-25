/*
let name = 'Fuad Hasan' ;
console.log(typeof name);

const isPriceHigh = true;
console.log(typeof isPriceHigh);

let mousePrice = 50;
console.log(typeof  mousePrice);
// --------------------------------
let housePrice = 360000;
const perSquareRate = 4000;
console.log('housePrice, perSquareRate',housePrice, perSquareRate);
let apartmentQuantity = 2;

// perSquareRate = 45000;
// console.log('housePrice, perSquareRate',housePrice, perSquareRate); //doesnt exist- typeerror

housePrice = housePrice * apartmentQuantity;
console.log('housePrice, perSquareRate, apartmentQuantity',housePrice, perSquareRate, apartmentQuantity);
// ----------------------------------------------
const number1 = 25;
const number2 = 85;

const result = number1 + number2;
console.log(result);

const result1 = number1 - number2;
console.log(result1);

const result2 = number2 / number1;
console.log(result2);

const result3 = number1 * number2;
console.log(result3);

const result4 = 90 % 20;
console.log('result4: ',result4);
// ----------------------------------------------
const value1 = 5;
const value2 = 8;

if(value1 > value2){
    const valueResult = value1+value2;
    console.log(valueResult);
}
else if(value1 == value2){
    console.log('both are equal');
}
else if(value1 != value2){
    console.log('both are not equal');

}
else if(value2 < value1){
    console.log('value2 is bigger than value1');
    
}
else{
    console.log('Error');

}
// --------------------------------
// 5.
const totalBudget = 100000;
const diskPrice = 300;
const keyboardPrice = 400;
const headSetPrice = 800 ;
const mugPrice = 200;
const laptopPrice = 36000;

if(laptopPrice < totalBudget && keyboardPrice === 200){
    console.log("buy these 2 things: laptop nd keyboard");
}
else if(laptopPrice < totalBudget && keyboardPrice >= headSetPrice){
    console.log("buy these 2 things: laptop and headset");
}
else if(laptopPrice < totalBudget && headSetPrice === 800 || diskPrice <= mugPrice){
    console.log("buy these 2 things: laptop snd headset and disk");
}
// ----------------------------------------------
const assignmentSubmit = 12;
const avgMarks = 60;

if(assignmentSubmit === 12 && avgMarks === 60){
    console.log('Yeah, you can join SCS batch');
}

if(assignmentSubmit === 12 || avgMarks <= 60){
    console.log('you can join Acc batch');

}
// ------------------------------------

const number = 24;
if(number %3){
    console.log('divisible');
}
else{
    console.log('not divisible');
}
// -------------------------------------
// 7-19 odd numbers 
let numbers = 7;
while(numbers <= 19){
    // console.log(numbers);
    if(numbers%2 !== 0){
        let oddNumbers = numbers;
        console.log(oddNumbers);
    }
    numbers++ ;
}

// --------------------------------------------------
let valueOfArray = [12, 58, 96, 75, 45, 85, 32, 90, 200, 500, 70, 60];

const elementOfArray = valueOfArray.length;
console.log(elementOfArray);

valueOfArray[4] = 94 ;
console.log(valueOfArray);

// add
let addValue = valueOfArray.push(62);
console.log(valueOfArray);

valueOfArray.unshift(100);
console.log(valueOfArray);

// remove
valueOfArray.pop();
console.log(valueOfArray);

for(let i=0; i< valueOfArray.length; i++){
    let element = valueOfArray[i];
    console.log('element', element);
}

for(const element2 of valueOfArray){
    console.log(element2);
}

let newValueOfArray = [12, 58, 96, 75, 45, 85, 32, 90, 200, 500, 70, 60];
for(let i = 0; i<newValueOfArray.length; i++){
    const newElement = newValueOfArray[i];
    // console.log('newElement',newElement);

    if(newElement > 80){
        let moreThan80 = newElement;
        console.log('moreThan80: ',moreThan80);
    }
}

// -----------------------------------------------
function productThreeNumbers(num1, num2, num3){
    const product = num1 * num2 * num3;
    return product;
}

const productResult = productThreeNumbers(15, 17, 19);
console.log(productResult);
// ---------------------------------------------------
let myDesk = {
    eDevice: 'Laptop',
    mug: 1,
    mouseBrand: 'A4 Tech'
}
console.log(myDesk);

myDesk.mug = 3;
console.log(myDesk);

delete myDesk.mouseBrand;
console.log(myDesk);

myDesk.name = 'hasan' ; //add new value
console.log(myDesk);
*/
// --------------------------------------------
/**
 * 1 feet = 12 inch
 * inch = feet / 12; 

// ------------Problem Solving checklist--------------
function feetToInch(feet){

    const inch = feet * 12;
    return inch;
}

const result = feetToInch(5);
console.log(result);

function centimeterToMeter(centimeter){
    const meter = centimeter * 100;
    return meter; 
}
const result2 = centimeterToMeter(10);
console.log(result2);


// 
//  1st book = 100 * 1 = 100*5 = 500 page
//  2nd book = 200 * 1 = 200*2 = 400 page
//  3rd book = 300 * 1 = 300*3 = 900 page
//  
function paperRequirements(countCopyBook1, countCopyBook2, countCopyBook3){

    let book1PrintPage = 100;
    let book2PrintPage = 200; 
    let book3PrintPage = 300;

    const book1Print = countCopyBook1 * book1PrintPage;
    const book2Print = countCopyBook2 * book2PrintPage;
    const book3Print = countCopyBook3 * book3PrintPage;

    const totalPageNeed = book1Print + book2Print + book3Print;

    return totalPageNeed;

}
const printCopy = paperRequirements(5, 2, 3);
console.log(printCopy);
*/


/*
function findMinMax(array) {
 let max = array[0];
 let min = array[0];
 for(let i=0; i< array.length; i++){
    const element = array[i];

    if(array[i] > max){
        max = array[i];
    }
    else if(array[i] < min){
        min = array[i];
    }
 }
 let maxMin = {max, min}
 return maxMin;
    
}
let Arr = [50, 60, 20, 10, 40];
 
const maxValue = findMinMax(Arr);
console.log(maxValue);
*/

function bestFriend(names){

    
    let max = names[0].length;
    let maxName = names[0];
    for(let i=0; i<names.length; i++){
        let element = names[i];

        if(element.length >= max ){
            
            max = element.length;
            maxName = element;
            
        }

    }
    return maxName;
}
let friendNames = ['Alvee kabir', 'Foysal Hossen', 'Shovon', 'Azmal Hossain', 'Fuad hasan'];
const longestName = bestFriend(friendNames);
console.log(longestName);

// -----------------------------------------
/**
 * 
 */

let value = 'hello world'
console.log('value.length: ',value.length);
let friendNames1 = ['Alvee kabir', 'Foysal Hossen', 'Shovon', 'Azmal Hossain', 'Fuad hasan'];
console.log('friendNames1 ',friendNames1.length);
