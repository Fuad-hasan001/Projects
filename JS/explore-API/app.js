/* 
fetch() : auto data will provide
button or html element interaction: using function
mainly, fetch(url-link or variable)
fetch(): fetch API is a modern interface that allow http request to server from web browsers. 
*/
function loadData(){
    fetch('https://jsonplaceholder.typicode.com/photos')// get the data from the url (http-request to server)
    .then(response => response.json())//promise, data converts to json-object
    .then(providedData => console.log(providedData))//load or displays provided data as json-object
}


function loadData2(){
fetch('https://jsonplaceholder.typicode.com/todos/1')//http request to server to get the data 
.then(res => res.json())//server promise, provide data converts to json-object
.then(data => console.log(data)) // load or displays data as json-object
}

// 
function loardUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUsers(data))
}
function displayUsers(data){
    console.log(data);
}