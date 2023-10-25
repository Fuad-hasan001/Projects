// Conditions
// var iphonePrice = 79000;
// var myBudget = 9500;

// If i-phone price in less than mu budget I will buy the iphone 

/**
 * If i-phone price in less than my budget
 *          I will buy the iphone
 * 
 * if(condition){
 *          statement
 * }
 */

// if(iphonePrice < myBudget){
//     console.log('i phone kine futani marbo');
// }

// var chikenPrice = 500;
// var myMoney = 50;
// if(chikenPrice <= myMoney){
//     console.log('Murgit raan khabo')
// }
// if(chikenPrice > myMoney){
//     console.log('smashed potato and lentils soup')
// }

/**Conditions
 * if(condition){
 * 
}
else{

}
 */
// if(chikenPrice < myMoney){
//     console.log('I will eat chiken');
// }
// else{
//     console.log('I will eat potato');
// }
// ===================================================
// Multiple Conditions: 

// = (one equal sign means set value)
// == (two equal means comparison)


// var isGraduated = true ;
// var salary = 75000;
// var cars = 1;

// if(isGraduated == true){
//     console.log('Eso biye kore feli')
// }
// else{
//     console.log('to kopale biye nai');
// }

// if(isGraduated == true && salary > 50000 && cars >=1){
//     console.log('Eso biye kore feli')
// }
// else{
//     console.log('to kopale biye nai');
// }


// var isGraduated = true ;
// var salary = 75000;
// var cars = 1;

// if(isGraduated === true || salary > 50000 || cars >=1){
//     console.log('Esho biye kori');
// }
// else{
//     console.log('tomar friend er number daw');
// }

// // when define two conditons, for separtion use ( ) between conditions
// if((isGraduated === true && salary > 50000) || cars >=1){
//     console.log('Esho biye kori')
// }
// =================================================

// Multi-stage-conditon : nested conditions
var money = 68;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;

if(danishPrice < money){
    console.log('Danish khabo');
}
else if(butterBread < money){
    console.log('Butterbon kahbo')
}
else if(toastBiscuit < money){
    console.log('toast kabbo');
}
else{
    console.log('Cha better bki kicu lagbe aanh');
}
// =================================================
// Nested if-else

var math = true;
var geometry = true;

if(math == true){
    if(geometry == true){
        console.log();
    }
    else{
        console.log('pithagorus moire bhuut');
    }
}