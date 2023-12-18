const lyrics = 'Hi i am hasan, Aspiring, junior Front end developer'
console.log(lyrics);

// divide with white space
const parts = lyrics.split(' ');
// console.log(parts);

// divide with dot/comma/any special charc
const sentence = lyrics.split(',')
// console.log(sentence);

//divide with empty string
const character = lyrics.split('');
// console.log(character);

// --------------------------------------
// .slice(): 
// cut specific portion 
const partial = lyrics.slice(2, 8);
// console.log(partial)

// .substring():
// same as slice()
const partial2 = lyrics.substring(2, 8);
// console.log(partial2);

// -------------------------------------
// at(): 
// declared/specific index wise show string characters
// positive value
let index = 8;
const result = lyrics.at(index)
console.log(result)

// negative value: 
const index2 = -8;
const result2 = lyrics.at(index2);
console.log(':', result2);

// -------------------------------------
// .trim()
const IntName = '  Hello World  ';

console.log(IntName)
const removeSpace = IntName.trim()
console.log('removeSpace:', removeSpace)

const removeSpace2 = IntName.trimStart()
console.log('removeSpace2: ', removeSpace2)

const removeSpace3 = IntName.trimEnd();
// console.log(removeSpace3);

// ------------------------------------------
// .concat()

const str1 = 'Fuad';
const str2 = 'Hasan';

// general
const fullName = str1 + str2;
console.log(fullName)

// use concat()
const fullName2 = str1.concat(' ' + str2) ;
console.log(fullName2)

const fullName3 = str1.concat(', ' + str2) ;
console.log(fullName3)

// -----------------------------------------
// .join()

const lines = [
    'Hi, i am hasan', 
    'Nice to meet you', 'What about you'
] ;

const fullLine = lines.join(': ');
console.log(fullLine)