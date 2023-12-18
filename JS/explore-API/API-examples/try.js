const p = [1, 2, 3];
// const q = p.find(n => Math.pow(n,3));
// console.log(q);
// const q = p.filter(n => Math.pow(n,3));
// console.log(q);
const q = p.map(n => Math.pow(n,3));
console.log(q);

const array = {hobbies: ["dancing", "singing", "acting"]}
console.log(JSON.stringify(array));