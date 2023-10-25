const loadPhones = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const response = await fetch(url);
    const data = await response.json();
    displayPhones(data.data, dataLimit);
}


const displayPhones = (phones, dataLimit) => {
    console.log(phones);
    const phonesContainer = document.getElementById('phone-container');
    phonesContainer.innerHTML = ''; //innerHTML or textContent

//-----------------------------------------------------
    // display 10 phones only-raff
     const showAll = document.getElementById('show-all');
    if(dataLimit && phones.length > 10){
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    }
    else{
        showAll.classList.add('d-none');
    } 
    // ----------------------------------------------------------
    /*phones = phones.slice(0, 10); //hide rest of the data  */

    //display no phones found
    const noPhone = document.getElementById('no-found-message');
    if (phones.length === 0) {
        noPhone.classList.remove('d-none');
    }
    else{
        noPhone.classList.add('d-none');
    }
// -------------------------------------------------------------------
    // display all phones
    phones.forEach(phone => {
        console.log(phone);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');

        phoneDiv.innerHTML = `
        
        <div class="card p-4">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button onclick="loadPhoneDetails('${phone.slug}')"  class="btn btn-primary"> Show Details </button>
            </div>
        </div>
        `
        phonesContainer.appendChild(phoneDiv);

    })
    // ------------------------------------
    //stop loader / spinner 
    toggleSpinner(false);
    // ------------------------------------
}

//common function, where use 2 individual places: 
const processSearch = (dataLimit) =>{
    toggleSpinner(true);
    // console.log("clicked");
    const searchField = document.getElementById('search-field').value;
    loadPhones(searchField, dataLimit);
}

// handle search button click
document.getElementById('btn-search').addEventListener('click', function () {
    // ------------------------------------
    // start Loader
    processSearch(10);
})

// function for spinner
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader')
    if(isLoading){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none');
    }
}


// not the best way to load show all button
document.getElementById('btn-showAll').addEventListener('click', function(){
    // while click btn take full dada loaded from API, that's why repeat
    // toggleSpinner(true);
    // // console.log("clicked");
    // const searchField = document.getElementById('search-field').value;
    // loadPhones(searchField, dataLimit);

    // avoid duplicate
    // instead of this declare a new fn and put the common things and call individual places
    processSearch();
})

const loadPhoneDetails = async id =>{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data);
}

// search input field enter key handler
document.getElementById('search-field').addEventListener('keypress', function(event){
    // console.log(event.key);
    if(event.key === 'Enter'){
        processSearch(10);
    }
})
/* loadPhones(); //default show */