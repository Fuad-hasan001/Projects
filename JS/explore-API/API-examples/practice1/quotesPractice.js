const loadQuotes = () =>{
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => displayQuotes(data))
}

const displayQuotes = quotes =>{
    console.log(quotes);
    const quotesContainer = document.getElementById('quotes-container');
    const quotesDiv = document.createElement('div');
    quotesDiv.classList.add('quote-style');
    quotesDiv.innerHTML = `
        <p>" ${quotes.quote} "</p>
    `
    quotesContainer.appendChild(quotesDiv);
}

loadQuotes();