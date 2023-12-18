// 1. var let const 
const numbers = [12, 546, 45, 98];
let salary = 450;
salary = 455;

// 2.default parameters
function calculateSalary(salary, tax = 0.25, bonus = 0){
    const remaining = salary - salary*tax;
    const total = remaining + bonus;
    return total;
}

// 3.template string
const elementHTML = `
<div

`
// 4. Arrow function
const doubleIT = x => x*2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary*tax

// destructuring
const {x,y,z,...c} = {x:45, y:12, z:33, name: 'nobita',salary: 12000 }
const [a,b,...r] = [12, 45, 21, 65, 98];
