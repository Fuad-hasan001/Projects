var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}
console.log(shoppingCart);

const keys = Object.keys(shoppingCart);
console.log('keys: ', keys);

const values = Object.values(shoppingCart);
console.log('values: ', values);


for(i=0; i<keys.length; i++){
    var propertyName = keys[i]
    var propertyValues = shoppingCart[propertyName]

    console.log(propertyName, propertyValues);

}

// for in loop
// for(va propertyName in sho)
