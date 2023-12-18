console.log('second.js');

// add item: using innerText createElement
const secondList = document.getElementById('second-list');
const li = document.createElement('li');
li.innerText = 'My dynamic item' ;
secondList.appendChild(li);

// add item: using inner htmlElement
// where to add 
const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
    <h1>My dynamic section</h1>
    <p>Extra text added inside paragraph</p>
    <ul>
        <li>first item</li>
        <li>first item</li>
        <li>first item</li>
        <li>first item</li>
    </ul>
`
main.appendChild(section);

