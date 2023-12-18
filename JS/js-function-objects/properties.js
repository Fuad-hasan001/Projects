// var shoppingCart = {
//     books: 3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse: 1,
//     pen: 25
// }

// console.log('shoppingCart: ',shoppingCart);

// // specific or particular value get
// var penCount = shoppingCart.pen;
// console.log('PenCount: ',penCount);

// // alternate get values: when you know the specific property name, use dot notation to get the property value
// var penCount2 = shoppingCart['pen'] ;

// var properties = Object.keys(shoppingCart);

// // new values set: 
// shoppingCart.sunglass = 3 ;
// console.log('updated shoppingCart: ',shoppingCart);
// ------------------------------------

/**Multiple ways to get an set object properties */

var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
console.log(shoppingCart);

// get values(when know the specific properties value)
var penCount = shoppingCart.pen;
// alternative way (1)
var penCount2 = shoppingCart['pen'];
console.log(penCount2);

// get all properties-name and propertiesValues from object (2)
var properties = Object.keys(shoppingCart);
var propertiesValues=Object.values(shoppingCart);
console.log('properties: ', properties);
console.log('propertiesValues: ', propertiesValues);

// (3)
var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
console.log(propertyName);
console.log(propertyValue);

// set properties
// 1
shoppingCart.mouse = 15;
console.log(shoppingCart);
// 2
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
// 3
shoppingCart[propertyName] = 89;
console.log(shoppingCart);

