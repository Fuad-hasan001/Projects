// 6 things we have already learn 
// 1. variable
// math operation: + - * /
// shorthand: += -= *= /= ++ --
var myName = 'khan' ;

// 2.Array: 
// Index/position: 0    1       2      3
// elements:    1        2        3      4
/** get indexValue: 
 * var varName = arrayName[index number];*/ 
/** SETindexValue: 
 * arrayName[index number]= 'dambool';*/
/**
 * .indexof()
 * .parseInt .parseFloat
 * .slice()
 * push(value), pop() | unshift(value), shift
 */

var friends = ['rahim','rahim','rahim','rahim'];
var thirdFriends = friends[2]; //get
friends[3] = 'dambool' ; //set

/** 3. ConditionalS
 * > < >= <= == === != !==
 * 
 */
if(friends.length < 2){
    console.log('develop your skill');
}
else{

}

/**4. Loop
 * while-loop
 * for-loop
 */
var number = 0;
while(number <= 6){
    console.log(number);
    number++ ;
}
for(var i=0; i<=10; i++){

}


/**5 function
 * 
 */
function isMoonUp(time){
    if(time > 7){
        return true;
    }
}

/**6. Objects
 * get: 
 * 1. Specific- variableName = objectName.keys1
 * 2. Specific- variableName = objectName['keys1'];
 * 3. justProperties- variableName = Object.keys(objectName)
 * 4. justPropertiesValues- variableName = Object.values(objectName)
 * set: 
 * 1. objectName.keys1 = newValue
 * 2. objectName['keys1'] = newValue
 * 3. 
 */
var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
// get: 
var firstKeysValues = shoppingCart.books;
var thridKeysValues = shoppingCart['mouse'];
var allKeys = Object.keys(shoppingCart);
var allKeysValues = Object.values(shoppingCart);

// set: 
shoppingCart.books = 5;
shoppingCart['sunglass'] = 89;
