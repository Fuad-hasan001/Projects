const numbers = [ 45, 65, 23, 98, 19];
// for(let i=0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

for(const number of numbers){
    console.log(number);
}

const products = [
    {id: 1, name: 'walton-phone', price: 19000},
    {id: 2, name: 'xiamoi-phone', price: 19000},
    {id: 3, name: 'iphone-phone', price: 19000},
    {id: 1, name: 'mack-book', price: 19000},
    {id: 1, name: 'lenevo', price: 19000},
    {id: 1, name: 'Dell inspiration', price: 19000},
    {id: 1, name: 'samsung phone note 7', price: 19000},
    {id: 1, name: 'phone one', price: 19000},
];

for(const product of products){
    console.log(product);
}

function compare(a, b){
    if(a.toString()===b){
        return true;
    }else{
        return false;
    }
    
}
const result = compare(25, 25);
console.log('result', result);
console.log("123" + 123);
let a = "hi" ;
let b = "there" ;
console.log(a+b);