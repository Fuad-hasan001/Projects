// const loadQuote = () => {
//     // console.log('quotes loading');
//     fetch('https://api.kanye.rest/')
//     .then(response => response.json())
//     .then(data => displayQuote(data));
// }

// const displayQuote = quote => {
//     // console.log(quote);
//     const blockQuote = document.getElementById('quote')
//     blockQuote.innerHTML = quote.quote;

// }

// loadQuote();


/* 
function declaration: 
function expression:
func
*/
// console.log(loadQuote2());
// function loadQuote2(){
//     console.log('quote loading2')

// }

const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => displayQuote(data));
}

const displayQuote = quote => {
    // console.log(quote);
    const blockQuote = document.getElementById('quote');
    blockQuote.innerHTML = quote.quote;
}

loadQuote();