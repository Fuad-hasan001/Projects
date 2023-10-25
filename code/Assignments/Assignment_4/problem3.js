// Problem 3: Is Less or Greater than seven 
function isLGSeven(number){
    if(typeof(number) === 'number'){

        let differences = number - 7 ;
        if(differences < 7){
            return differences;
        }
        else{
            return number * 2;
        }
    }

    else{
        return 'Input a valid number' ; 
    }
}
const result_3 = isLGSeven('string');
console.log(result_3);

// ------------------------------------------------------------