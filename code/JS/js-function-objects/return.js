// // different way take returns 
// function add(num1, num2) {
//     console.log(num1, num2);
//     var sum = num1 + num2;
//     // console.log(sum);
//     // return;
//     // return 15;
//     // return sum;
// }
// // function call
// // add(45, 15);

// // 
// var total = add(80, 20);
// // console.log('total: ', total);


// function bringShingara(money){
//     var singaraPrice = 10;
//     var quantity = money / singaraPrice ;
//     return quantity;
// }

// var myTaka = 150;
// var singaras = bringShingara(myTaka);
// console.log('singaras: ', singaras);

function add(num1, num2) {
    console.log(num1, num2);
    var sum = num1 + num2;
    // console.log(sum);
    return sum;
    /**
     * not define return - result: undefined
     * define just return not any values - result: undefined
     */
}

var total = add(45, 15); /**if i wanna need the return value then it could be store in any variable */
// console.log(total);


function bringShingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var shingaras = bringShingara(200);
console.log('Eating shingaras: ', shingaras);

// another way: 
var myTaka = 150;
var shingaras = bringShingara(myTaka);
console.log('Another way-Eating shingaras: ', shingaras);

