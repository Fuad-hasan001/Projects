const loadData = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountry(data))
}

const displayCountry = countries =>{
    console.log(countries);

    const allCountries = document.getElementById('all-countries');
    

    for(const country of countries){
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('countryInfo');

        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p>Capital: ${
               country.capital ? country.capital[0] : 'no capital'
            }</p>
            <button onclick = loadCountryDetails('${country.cca2}') >Country Details</button>
        `
        allCountries.appendChild(countryDiv);
    }   
}

const loadCountryDetails = countryCode =>{
    console.log(countryCode);
    const url = `https://restcountries.com/v3.1/alpha/${countryCode}`
    fetch(url)
    .then(response => response.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = details =>{
    console.log(details)
    const countryDetails = document.getElementById('country-details');
    const detailsDiv = document.createElement('div');

    detailsDiv.innerHTML=`
        <h3>name:${details.name.common} </h3>
        <img src="${details.flags.png}" >
        <p>population: ${details.population}</p>
    `

    countryDetails.appendChild(detailsDiv);
}

loadData();