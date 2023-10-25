/* 
1. JSON: stringify, parse
        obj convert to string: JSON.stringify
        string convert to obj: JSON.parse

const student = {
        name: "salib khan", 
        age: 32,
        movies: ['king', 'khan']
    }

2. fetch: 
    alternative: async..await, raw xml http request(rarely)

    fetch('url')
    .then(response => response.json())
    .then(data => console.log(data));

3. object keys, values
    const keys = Object.keys(student);
    const values = Object.values(student);

    // array: applying Loop- USING (forEach, map)
    const numbers = [23, 54, 67, 87, 23, 78];
    numbers.forEach(num => console.log(num)); //most of the time | not return
    numbers.map(num => num * 2); // need return

    // array like object USING(for of/ forEach) arguments (querySelector/querySelectorAll, getElementsByClassName/getElementById)

    // loop on an object USING (for in)

    //add or remove from an array
    const products = [
        {name: 'phone', price:52000, brand: 'HTC', color: 'gray'}
        {name: 'laptop', price:9000, brand: 'HP', color: 'gray'}
        {name: 'watch', price:900, brand: 'can', color: 'yellow'}
        {name: 'mouse', price:1200, brand: 'A4 tech', color: 'black'}
        {name: 'camera', price:3000, brand: 'canon', color: 'blue'}
    ];

    const newProduct = {name: 'webcam', price: 700, brand: 'lal'};

    const newProducts = [...products, newProduct]; //add

    //Remove: create a new array without one specific item
    //remove phone means create a new array without the phone
    cons remaining = products.filter(product => product.name !== 'phone');
*/