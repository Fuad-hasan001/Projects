/* 
1. How to declare a variable using let and const 

2. condition (if()-else if()-else)
    6 basic condition: > < === !== <== >==
    multiple condition: &&(and), ||(or)

3. Array: 
    array declare
    index, set value, get value
    length, push, pop

4. Loop: 
    for loop: for(){statement}
    while loop: declare-while(condition){statement increase/decrease}

5. Function: 
    basic function: function(p1, p2){statement}
    return result
    function call, parameter pass

6. Object:     
    declare object: const student = {
        name: "salib khan", 
        age: 32,
        movies: ['king', ,'khan']
    }
    myVariable = 'age' ;
    3 ways to access/call property by name
        console.log(student.age); //direct by .property
        console.log(student['age'])//access via property name string
        console.log(student[myVariable]); // access via property name in a variable.

*/

// Quiz: 
/* const name = 'Hero';
const age = 34;
const person = {name, age};
console.log(person); */

/* const adventurer = {name: 'Alice', cat: {name:'Lucy' }};
const ratName = adventurer?.rat?.name;
console.log(ratName); */

/* const person = null;
console.log(person ? person : "person is null"); */

/* const obj = {a:1};
console.log(Object.keys(obj).length===0); */