const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    console.log(countries[0]);

    const CountriesHTML = countries.map(country => getCountryHTML(country))
    // console.log(allCountriesHTML)
    const container = document.getElementById('countries')
    container.innerHTML = CountriesHTML.join(' ')
}

// for display: protekta coutry er data ke niye alada alada html create korbo
const getCountryHTML = country =>{
    return `
        <div class = "country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}">
        </div>
    `
}
loadCountries()

