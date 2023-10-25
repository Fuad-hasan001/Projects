/*
const jim = 84;
const della = 99;
const chinku = 77;

if(jim > della && jim > chinku){
    console.log('jim will get the cake');
}
else if(della > jim && della > chinku){
    console.log('della will get the cake');
}
else{
    console.log('chinku will get the cake');
}
*/

// Math.max();
// Math.min();

// write a function that will take 3 numbers will return the max number
// write a function that will take 3 parameters and will return the min number

// first time do it using if-else
// second time do it using Math.min or Math.max
// ----------------------------------------------------

// who is the tallest person among of them: 
function maxInArray(numbers){
    let largest = numbers[0];
    for(i=0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        console.log(element);

        if(element > largest){
            largest = element;
        }
    }
    return largest; 
}
const heights = [167, 190, 120, 165, 137, 265];
const tallest = maxInArray(heights);
console.log('Tallest person is: ', tallest);