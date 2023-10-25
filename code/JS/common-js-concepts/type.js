// strongly typed  language
// int a = 4;
// string b ='alim halimm kalim'
// bool c = True;
// object student = {
//     name: 'hajubaji',
//     id: 55
// }

// JS dynamic type Language
// const a = 5;
// const b = 'samsu kopai na ekhon ar';
// let ages = [45, 65, 48];
// const student = {
//     id: 23,
//     class: 7
// };

// console.log(typeof a)

// individually/single memory space e rakhe 
let x = 5;
let y = x;
console.log(x, y);
y = 7; //re-assign
console.log(x, y);


// single memory-space ke refer kore; but reassign korle new value ke refer korbe
let p = {job: 'web developer'}
let q = p;
console.log(p, q);
/* q = {job: 'backend'} //re-assign
console.log(p, q); */

// but...change all/both value of p & q
// which is prove that non-primitive type single memory space refer kore
q.job = 'frontend';
console.log('q.job: ', p, q);