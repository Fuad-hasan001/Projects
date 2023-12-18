// option-1: directly  set on the html element
// <button onclick="document.body.style.backgroundColor='yellow' ">Make Yellow</button>


// option-2: add onClick function on the html element 
// <button onclick="makeRed()">Make Red</button> <!--call function-->
function makeRed() {
    document.body.style.backgroundColor = 'red';
}



// option-3
// const makeBlueButton = document.getElementById('make-blue');
// // console.log(makeBlue);
// makeBlueButton.onclick = makeBlue; //set function 

// function makeBlue() {
//     document.body.style.backgroundColor = 'blue';
// }

// option-4
{/* <button id="make-pink">Make pink</button>  */}
// const pinkButton = document.getElementById('make-pink');
// pinkButton.addEventListener('click', makePink)

// function makePink(){
//     document.body.style.backgroundColor = 'pink' ;
// }

// option-4 another way
{/* <button id="make-green">Make-Green</button> */}
// const makeGreenButton = document.getElementById('make-green');

// makeGreenButton.addEventListener('click', function makeGreen(){
//     document.body.style.backgroundColor = 'green' ;
// })