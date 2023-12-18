// condition operator: > >= < <= == === != && ||
// Condition: if-elseif-else
const number1 = 25;
const number2 = 45;
// const number3 = 85;

/* if(number1 > number2 && number1 === 25){
    console.log('num1 is a big number');
}
else if(number2 > number1 && number2 === 96){
    console.log('num2 is a big number');
}
else{
    console.log('nothing');
} */

// multi stage 
const result = 60;
const gift1 = 'chess';
const gift2 = 'rubikscube'
const gift3 = 'Books'

if(result > 90){
    console.log('win 3 gifts: ',gift1, gift2, gift3)
}
else if(result >= 75){
    console.log('win 1 gift: ', gift1)
    if(result === 80){
    console.log('win 2 gifts: ', gift1, gift2)
    }
}
else{
    console.log("nothing");

}
