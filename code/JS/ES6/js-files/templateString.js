const person1 = 'Barak Obama' ;
const person2 = "Ben White" ;
const person3 = `Donald Trump` ;

const multiline = 'First Line text \n' + 'second line of code \n' 
+ 'Third line of code \n' + 'Fourth Line of string' ;

// console.log(multiline);

const newMultiline = `First line of test
second line of text
third line of string
fourth line of code `;
console.log(newMultiline);

const a = 20;
const b = 30;

// old system: 
const summary = 'sum of: ' + a + ' and ' + b + ' is: ' + (a+b) ;
// console.log(summary); 

// new system using ES6: 
const newSummary = `sum of ${a} and ${b} is ${a+b}` ;
console.log(newSummary);