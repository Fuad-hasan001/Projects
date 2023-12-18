function checkerVowOrCons(letter){

    if(letter=='a'|| letter=='e'|| letter=='i'||letter=='o'||letter=='u'){
        return 'vowel' ;
    }
    else if(letter=='A'|| letter=='E'|| letter=='I'||letter=='O'||letter=='U'){
        return 'vowel' ;
    }
    else{
        return 'consonant' ;
    }
}
const result = checkerVowOrCons('y');
console.log('result: ', result);