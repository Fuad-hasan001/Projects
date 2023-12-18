function isEven(number) {
    const remainder = number % 2;
    // console.log(remainder);
    if(remainder === 0){
        // console.log('number is even');
        return true;
    }
    else{
        // console.log('number is odd');
        return false;
    }
}

const myNumber = isEven(48);
console.log(myNumber);
const myAnotherNumber = isEven(303);
console.log(myAnotherNumber);