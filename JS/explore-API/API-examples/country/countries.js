/* 
if-else short form: condition ?(if) statement1 :(else) statement2
*/

const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountry(data));
}

const displayCountry = countries => {
    console.log(countries);
    const countriesContainer = document.getElementById('all-country');
    // for(const country of countries){
    //     console.log(country);
    // }
    countries.forEach(country =>{
        // console.log(country);
        console.log(country.cca2);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country-info');

        //dynamic data
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common} </h3>
            <p>Capital: ${country.capital ? country.capital[0] : 'no capital'} </P>
            <button onclick = "loadCountryDetails('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countryDiv);

    })
}

//dynamic url , click button 
const loadCountryDetails = countryCode => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${countryCode}`
    // console.log('details comming soon', countryCode)
    // console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => showCountryDetail(data[0]));
}

//dynamic url data load & show
const showCountryDetail = country => {
    console.log('country: ', country);
    const detailContainer = document.getElementById('country-detail')
    detailContainer.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <img src="${country.flags.png}">
    `
}

loadCountries();