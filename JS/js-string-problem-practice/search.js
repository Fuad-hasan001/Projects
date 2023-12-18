const lyrics = 'Tumi bondhu kala pakhi ami jeno ki.bosonto kale tomai bolte pari ni. kala kala sada sadha'

// const doestExist = lyrics.includes('pakhi');
// const doestExist = lyrics.includes('poKhi');

const searchString = 'bosOnto' ;
// const searchStringLowerCase = searchString.toLowerCase();
// const lyricsLowerCase = lyrics.toLowerCase();
// const doestExist = lyricsLowerCase.includes(searchStringLowerCase); 
const doestExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase()) ;
// console.log(doestExist);
// console.log(doestExistOneLine);
// ----------------------------------------

// indexof()
console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('Tumi'));
// 
if(lyrics.indexOf('sada') != -1){
    console.log('Exists inside the string');
}
else{
    console.log('can not find it');
}