// const myInches = 12;
// const myFeet = myInches / 12;
// console.log(myFeet);

// const dadaInches = 144;
// const dataFeet = dadaInches / 12;
// console.log('dadaFeet', dadaFeet);

function inchTOFeet(inches) {
    const feet = inches / 12;
    return feet;
}
// 1
const dadaInches = 144;
const dadaFeet = inchTOFeet(dadaInches);
console.log(dadaFeet);
// 2
const friendsInches = 168;
const friendsFeet = inchTOFeet(friendsInches);
console.log(friendsFeet);



function milesToKilo(miles) {
    const kilometer = miles * 1.609;
    return kilometer;
}

const milesInput = 27;
const kilometer = milesToKilo(milesInput);
console.log('kilometer: ',kilometer);
