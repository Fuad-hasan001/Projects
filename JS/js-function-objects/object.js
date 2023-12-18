// objects: 
/**
 * var objectName = {
    // propertiesName1: value1,
    // propertiesName2: value2,
    // propertiesName3: value3,
    .....

} */ 

// var students = {
//     id: 115,
//     name: 'iliyas',
//     class: 9,
//     marks: 98 
// }

// var mobile = {
//     brand: 'Samsung',
//     price: 19000,
//     storage: '64gb',
//     camera: '7mp'
// }

// var myComputer = {
//     brand: 'lenevo',
//     price: 39000,
//     color: 'silver',
//     processor: '17'
// }

// console.log(myComputer);

// // object value get properties
// console.log(myComputer.price); //specific property-value(.propertiesName)
// console.log(myComputer.brand);

// // object value set properties: 
// myComputer.processor = 'core-i9'
// console.log(myComputer);

// ------------------------------------------

var student = {
    id: 115,
    name: 'salim',
    class: 9,
    marks: 98
}

var mobile = {
    brand:' samsung',
    price: 190000,
    storage: '64gb',
    camera: '7mp'
}

var computer ={
    brand: 'lenevo', //keys or properties 
    price: 19000,
    color: 'silver',
    processor: '17'
}

console.log(computer);

// get specific value
console.log('computerprice: ',computer.price);
console.log('mobilebrand: ',mobile.brand);

// update / change keys value
computer.processor = 'i5';
console.log(computer);