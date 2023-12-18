// declare object:
/* const objectName ={
    // properties - key:value
    key1: value1,
    key2:value2,
    
} */

const marks = {
    classTeacher: 'Amena madam',
    bangla: 12,
    english: 42,
    math: 33,
    science: 65,
    isPass: true
}
console.log(marks);

// get value from object 
const getValue = marks.english;
console.log(getValue);

// Object.keys: it return output as an array only keys or values
const getKeys = Object.keys(marks)
console.log(getKeys);
const getValues = Object.values(marks)
console.log(getValues)

// like an array:
getNewValue = marks['math']
console.log(getNewValue);

// in the variable
const marksInput = 'math'
getOtherValue = marks[marksInput]
console.log(getOtherValue)

// set value into an object
marks.science = 12;
console.log(marks);

// set value like an array
marks['science'] = 100;
console.log(marks);


const shoppingCart = {
    book: 10,
    pen: 5,
    pencil: 2,
    keyboard: 1,
    Mouse: 7
} 
console.log(shoppingCart)
const keys = Object.keys(shoppingCart);
const values = Object.values(shoppingCart);
// console.log(keys, values);

// for loop
for(let i=0; i < keys.length; i++){
    const getPropertyName = keys[i];
    const getPropertyValues = shoppingCart[getPropertyName]
    console.log(getPropertyName, getPropertyValues);
}

// for in loop
for(propertyName in shoppingCart){
    const values = shoppingCart[propertyName];
    console.log(propertyName, values)
}





// set key to objects


