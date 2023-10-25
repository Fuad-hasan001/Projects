const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];


// slice:  slice(start-index, end-index)
const partial = friends.slice(2, 5)
// console.log(partial);

// splice:  splice(start-index, remove, add)
// splice(start-index, number of elements to remove, inject-value)
// Removes elements from an array and, if necessary, inserts new elements in their place, 
// returning the deleted elements.(will change the original array)

// const partial2 = friends.splice(2, 5);
// console.log(partial2);
// console.log(friends);

// extra-splice features: 
const partial3 = friends.splice(2, 5, 99, 555, 777);
console.log(partial3);
console.log(friends);



