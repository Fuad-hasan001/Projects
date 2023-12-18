// Problem 1: Let’s play a mind game
/**
 * Description: This is a mindGame function. Where it takes input a positive number and will do some arithmetic-operation like at first input number multiply by 3 then sum with 10, divide by 2 and subtraction to 5. After that return the result(positive number) to mindGame function. 
 */
function mindGame(number) {

    let finalOutput;
    if (number > 0) {
        let productOfNumber = number * 3;

        let sumOfNumber = productOfNumber + 10;

        let divisionOfNumber = sumOfNumber / 2;

        let subtractionOfNumber = divisionOfNumber - 5;

        finalOutput = subtractionOfNumber;

        return finalOutput;
    }
    else {
        return 'Please enter a Valid positive number';
    }
}
const result_1 = mindGame(33);
console.log(result_1);


// --------------------------------------------------
// Problem 2: Finding even or odd
/**
 * Description: The name of the function is evenOdd. Mainly, it takes a input string type data and it will count the characters from data and then check total counting number is an even or odd. Finally return the the result to evenOdd() function. 
 */

function evenOdd(inputText) {

    if (typeof (inputText) === 'string') {

        if (inputText.length % 2 === 0) {
            return 'even';
        }
        else {
            return 'odd';
        }
    }
    else {
        return 'Please enter a valid text';
    }

}
const result_2 = evenOdd('chatgpt');
console.log(result_2);




/*
// -----------------------------------------------
// Problem 3: Is Less or Greater than seven 
/**
 * Description: Here is a function of isLGSeven(). Main purpose of this function, if differences of given number and 7 is less than 7 then it will return the differences. Also, if differences is greater than 7 then it will return double of the input value. 
 */

function isLGSeven(number) {
    if (typeof (number) === 'number') {

        let differences = number - 7;
        if (differences < 7) {
            return differences;
        }
        else {
            return number * 2;
        }
    }

    else {
        return 'Input a valid number';
    }
}
const result_3 = isLGSeven(-15);
console.log(result_3);



// ------------------------------------------------------
// Problem 4: Finding Bad data
/**
 * findingBadData() is one of the great function among of others. This function will helps to find out the total negative number from an array where it will take a input as array and return the total countBadData as a number. Also added that badData means negative value and goodData means positive number. 
 */

function findingBadData(number) {


    for (let check = 0; check < number.length; check++) {
        const value = number[check];

        if (typeof (value) === 'number') {

            countBadData = [];
            for (let i = 0; i < number.length; i++) {
                let element = number[i];
                // console.log('element: ', element);

                if (element < 0) {
                    countBadData.push(element);
                }
            }
            return countBadData.length;
        }
        else {
            return 'Enter a valid number of Array'
        }
    }

}
let arrayOfNumber = [2, -5, -7, -13];
const result_4 = findingBadData(arrayOfNumber);
console.log(result_4);

// -------------------------------------------------------
// Problem 5: Convert your gems into diamond 
/***
 * Description: The last function of gemsToDiamond() where it is converting gems to diamond by taking 3 numbers as a input of each friends and return the rest of diamond. Mainly it contains 3 given gemsPower which is multiply with those input numbers and get the total diamond from them. After that, get the rest of diamond if totalDiamond is double or equal to 1000. Otherwise it will return directly totalDiamond number .
 */

function gemsToDiamond(friend_1GemsNumber, friend_2GemsNumber, friend_3GemsNumber) {

    if (friend_1GemsNumber >= 0 && friend_2GemsNumber >= 0 && friend_3GemsNumber >= 0) {
        let friend_1GemsPower = 21;
        let friend_2GemsPower = 32;
        let friend_3GemsPower = 43;

        let friend_1Diamond = friend_1GemsPower * friend_1GemsNumber;

        let friend_2Diamond = friend_2GemsPower * friend_2GemsNumber;

        let friend_3Diamond = friend_3GemsPower * friend_3GemsNumber;

        let totalDiamond = friend_1Diamond + friend_2Diamond + friend_3Diamond;


        if (totalDiamond >= 1000 * 2) {
            totalDiamond = totalDiamond - 2000;
            return totalDiamond;
        }
        else {
            return totalDiamond;
        }
    }

    else {
        return 'Enter a valid numbers';
    }

}

const result_5 = gemsToDiamond(100, 5, 1);
console.log(result_5);

// --------------------------------------------------------_


