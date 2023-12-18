// Problem 2: Finding even or odd

function evenOdd(inputText){

    if(typeof(inputText) === 'string'){

        if(inputText.length % 2 === 0){
            return 'even' ;
        }
        else{
            return 'odd' ;
        }
    }
    else{
        return 'Please enter a valid text' ;
    }
    
}
const result_2 = evenOdd('chatgpt');
console.log(result_2);
// -----------------------------------------------