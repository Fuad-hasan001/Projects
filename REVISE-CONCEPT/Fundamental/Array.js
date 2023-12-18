// declare an array: 
const playerName = ['hafiz', 'nafiz', 'neel', 'jamal', 'avenger']
console.log(playerName)

// array length
// const lengthOfArray = playerName.length
// // console.log(lengthOfArray)

// index/position: start form 0 to array.length
// array index and it value
// for(let i = 0; i<playerName.length; i++){
//     const element = playerName[i]
//     // console.log(i, element)
// }

// get element by index
// const getElement = playerName[2]
// // console.log(getElement)

// set/change/replace element by index
// playerName[4] = 'irfan' ;
// // console.log(playerName)

// add in array list
// playerName[5] = 'jamil'
// // console.log(playerName);

// playerName[5] = 'jamil'
// console.log(playerName); //<1 empty item>

// **best way: add value in the last position of an array
playerName.push('ismail');
console.log(playerName)

const addNewValue = playerName.push('irfan')
console.log(playerName)

// add value in the first position of an array
const addFirstPosition = playerName.unshift('istiak')
console.log(playerName)

// remove from an array:
playerName.pop();
console.log(playerName)

playerName.shift();
console.log(playerName)

// find the index of an specific element
const elementPosition = playerName.indexOf('jamal')
console.log(elementPosition)

// get output: -1: dosen't exist into an array
const elementPosition2 = playerName.indexOf('koishik')
console.log(elementPosition2)
