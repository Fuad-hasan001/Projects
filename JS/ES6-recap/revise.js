// var let const
const numbers = [12, 546, 45, 98];
let salary = 450;
salary = 455;

// default parameter
function calculateSalary(salary, tax = 0, bonus = 0){
    const remaining = salary - salary * tax;
    const total = remaining + bonus;

    return total;
}
console.log(calculateSalary(10000));

// 3. template string
const elementHTML = `
<div>
    <h3>Name: </h3>
    <p>Address </p>
    <p> Salary: ${calculateSalary(10000, 0, 0)}</p>
    <p>others: ${numbers[2]}</p>
</div>
`

// 4. Arrow function
const doubleIt = x => x * 2;

    // multiple parameter
const calculateSalary2 = (salary, tax, bonus) => salary - salary*tax +bonus;

// 5. spread out (using ...)
const ages = [11, 13, 15, 14, 10, 16];
const newAges = [...ages, 22, 24, 13];

// destructuing
const {x, y,...c } = {x: 45, y: 12, z: 33, name: 'sakib', salary: 490000};
 const [a, b, ...e] = [45, 87, 23, 13, 65];