// variable declaration

// string type variable
var bottle = 'water' ;
var bottleColor = 'yellow';
var penCOlor = 'blue';

// number type variable
var sunglassPrice = 120;

// boolean type variable
var isExpensive = true;

//declare itmes in the array
var tableItems =['bottle', 'pen', 'mouse', 'sunglass', 'paper'];
// position/index:   0       1       2         3          4
console.log('tableItems: '+tableItems);

// get 3no. index value(/items) from an array
var item3 = tableItems[3];
console.log('item3: '+item3);

//set-or-change 4no. index value(/item)
tableItems[4] = 'notebook' ;
console.log('tableItems: '+ tableItems[4]);

// know the item and Find the item index-no. from an array: 
var penIndex = tableItems.indexOf('pen');
console.log('penIndex: '+ penIndex);

// push: add value in the last position of an array
tableItems.push('lamp');
console.log('tableItems: '+ tableItems);

// pop: remove value from the last position of an array
// tableItems.pop();
// console.log(tableItems);

// unshift: add value in the first position of an array
// tableItems.unshift('CALANDER ');
// console.log('unshift-tableItems: '+ tableItems);

// unshift: remove value in the first position of an array
// tableItems.shift();
// console.log(tableItems);

// conditionals: 
/**
 * > < == != === >= <= 
 * + - * /
 * 
 */

// if-else
if(tableItems.length > 4){

}
else if(tableItems[3] == 'pen'){

}
else{

}

// nested if-else 
if(tableItems.length < 2){
    // statement
    if(condition_1){

    }
    else if(conditon){

    }
    else{

    }
}
else if(condition_2){
    // statement
}
else{
    // statement
}