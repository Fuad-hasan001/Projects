function reverseString(input){
    // let newString = [] ;
    let newString = ''; 
    for(let i=input.length-1; i>=0; i--){
        let element = input[i];
         newString  = newString + element;
         console.log(i, newString);
    }
    return newString;
}
const input = "GeeksforGeeks" ;
const result = reverseString(input);
console.log('result: ', result);