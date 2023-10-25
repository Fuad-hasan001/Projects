const fish = {
    name: 'King Hilsha',
    address: 'Chandpur',
    color: 'silver',
    phone: '01579662332',
    price: 4000
}

const phone = fish.phone; 
const color = fish.color;
const price = fish.price; 

// const {phone} = fish;
console.log(phone);
console.log(phone);
console.log(phone);

const {age, name} = {name: 'Almas', age: 56, profession: 'makeup artist'}
console.log(age, name);

const {address} = fish;
console.log(address);

// array destructuring
const [first, another] = [44, 99];
console.log(first, another);

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(notun);

function getNames(){
    return ['Alim', 'Halim'];
}

const [baba, chacha] = getNames()

// const y = x => x*x;
// const z = y(5);
// console.log(z);

// const division = num1, num2 => console.log(num1 / num2);
const numbers = [10, 20, 30, 40.50,60.70];
console.log(Math.max(...numbers));