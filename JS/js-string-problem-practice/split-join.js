const lyrics = 'Tumi bondhu kala pakhi ami jeno ki.bosonto kale tomai bolte pari ni. kala kala sada sadha' ;

// split()
const words = lyrics.split(' ');
console.log(words);

const characters = lyrics.split('');
console.log(characters);

const sentence = lyrics.split('.');
console.log(sentence);

// slice()
const partial = lyrics.slice(5, 8); 
console.log(partial);

// substring()
const partial2 = lyrics.substring(5, 8);
console.log(partial2);

// at()
// show specific index character

// indexof(): search value from first
// lastindexof(): search value from last

// trim(): remove first and last position space 
// trimstart(), trimend()

// concat: sum of sentence

// join()
const lines = [
    'Tumi bondhu kala pakhi ami jeno ki',
    'bosonto kale tomai bolte pari ni',
    ' kala kala sada sadha'
  ];
  const newSong = lines.join(':'); //('.') or any
  console.log(newSong);
