console.log('first.js');

// select particular element using tagName
const allLi = document.getElementsByTagName('li');
console.log(allLi);

// another way: select particular elements or items using getElementByClassName
// get HTMLCollections it is also known as array like object
const allTitles = document.getElementsByClassName('section-title');
console.log(allTitles);

// specific item select korte hoile using getElementById()
const secondSection = document.getElementById('second-section');
console.log(secondSection);

// style using js approach
secondSection.style.color = 'white'
secondSection.style.backgroundColor = 'tomato'

// document.querySelectorAll() : nodeList gulo div=be
// document.querySelector()  : 1st matching dibe

// nodeList traverse, parentNode, childNode,children, previousSiblings, nexSiblings,  



