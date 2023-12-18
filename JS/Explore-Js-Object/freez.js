const bottle = {
    color: 'yellow',
    price: 50,isCleaned: true,
    capacity: 1
}

const keys = Object.keys(bottle);
console.log(keys);

const values = Object.values(bottle);
console.log(values);

const pairs = Object.entries(bottle);
console.log(pairs);

// console.log('Prev: ',bottle);
// delete bottle.isCleaned;
// console.log('recent',bottle);

//after seal modify the value but not to add or delete existent properties
// after freeze not to modify, add, delete existent properties or values
console.log('Prev: ',bottle);
// Object.seal(bottle);
Object.freeze(bottle);
delete bottle.isCleaned;
// console.log('recent',bottle);
bottle.price = 1000;
bottle.height = 12; 
console.log('recent',bottle);


// --------------
const obj = {a:1, b: 7, c: 3, length: 2}
console.log('try: ', Object.keys(obj).length);

const obj1 = {module: 35, video:2}
const obj2 = {module: 35, video:2}
console.log(obj1 === obj2);

const getGirlFriend= (name = "chokina")=>"name";
 console.log(getGirlFriend()); 


