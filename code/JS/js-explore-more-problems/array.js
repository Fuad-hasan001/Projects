// try to detect or find out the type
const country = 'Bangladesh';
const age = 52;
const isIndependent = true;

const student = {id:121, class: 11, name:'Agun'}
const friends = [13, 14, 11, 17, 21, 16, 15, 20];

function add(num1,num2){
    return num1 + num2;
}
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);

console.log(typeof student);
// console.log(typeof friends);
console.log(Array.isArray(friends)); //check array-type using Array.isarray(array-name)
console.log(typeof add);

// search particular value in array
console.log(friends.includes(19));
console.log(friends.includes(21));

// Another-way search particular value in array
if(friends.indexOf(252) != -1){

}

// concat: join or put 2 array together
const newFriend = [12, 13, 11, 13];
const allFriends = newFriend.concat(friends);
console.log(allFriends);

