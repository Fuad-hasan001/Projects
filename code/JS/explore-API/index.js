/* 
click btn and event interact 
load data and display in browser
*/

// Dynamically data load-1
function loadUsers3() {
    fetch('https://jsonplaceholder.typicode.com/users') //http request to server and response through promise
        .then(response => response.json())//inside promise resolved the data and convert to json
        .then(data => displayUsers(data))
}
function displayUsers(data) {
    // console.log(data);
    const ul = document.getElementById('users-list');
    for (const user of data) {
        //console.log(user);//individually display user
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user;
        ul.appendChild(li);
    }
}


// Dynamically data load-2
function userInformation() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUserinfo(data))
}
function displayUserinfo(data) {
    // console.log(data);

    const ol = document.getElementById('lists');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.address.city;
        ol.appendChild(li);

    }
}

// -----------------------------------------
