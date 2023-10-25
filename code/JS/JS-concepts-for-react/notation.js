const person = {
    name: 'Lal Nil Holud Mia',
    profession: 'Traffic Surgeon',
    age: 39, 
    address: "shabag"
}

// access property from obj
// dot notation: 
const prof1 = person.name;
console.log(prof1);

// bracket notation
// const prof2 = person[profession] //this is not right way
const prof2 = person['profession'];
console.log(prof2);

// same thing but dynamic way: 
const personAge = 'age';
const prof3Age = person[personAge];
console.log(prof3Age);