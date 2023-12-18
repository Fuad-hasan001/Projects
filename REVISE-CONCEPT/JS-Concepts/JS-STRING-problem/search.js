const lyrics = 'Hi i am hasan, Aspiring junior Front end developer'
console.log(lyrics);

// search:
const searchValue = 'front end';

// const doesExist = lyrics.includes(searchValue)

// case sensitive: lower/upper case issue
const givenString = lyrics.toLowerCase();
const searchString = searchValue.toLowerCase();
const doesExistConvert = givenString.includes(searchString)
// console.log(doesExistConvert )


const doesExistOneLine = lyrics.toLowerCase().includes(searchValue.toLowerCase());
console.log(doesExistOneLine)

// .indexof(): 
// find it: show index no
console.log(lyrics.indexOf('hasan'))
// didn't find it: -1
console.log(lyrics.indexOf('ho'))

// special: !== -1: means exist/true/show index no
if(lyrics.indexOf('developer') !== -1){
    console.log('exist inside the lyrics')
}
else{
    console.log('Does not exist');
}

// startsWith(''): first character/word of the string
// output: true / false
console.log(lyrics.startsWith('Hi'))
// output: true ; 

// endsWith(''): ens character/word of the string
// output: true / false
console.log(lyrics.endsWith('hasan'))
// output: false; because this word is not the ends word

