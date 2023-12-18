// var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(i);

//     if(i > 10){
//         break; //
//     }
// }

var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];
for (let i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    // console.log(i);

    if(number > 50){
       continue;
    }
    console.log(number);

}