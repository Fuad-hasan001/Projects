/* 
1. array of Object: 
    const products = [
        {name: 'laptop', price:9000, brand: 'HP', color: 'gray'}
        {name: 'watch', price:900, brand: 'can', color: 'yellow'}
        {name: 'mouse', price:1200, brand: 'A4 tech', color: 'black'}
        {name: 'camera', price:3000, brand: 'canon', color: 'blue'}
    ];
    
    // return the array: (map)
    need to declare variable
    const brands = products.map(product => product.brand);
    console.log(brands);
    const prices = products.map(product => product.price)
    console.log(prices);

    // not to return array and do something for value: (for each)
    -no need to declare variable
    products.forEach(product => console.log(product));
    products.forEach(product => console.log(product.color));

    // using multiLine arrow function
    products.forEach(product => {

    })

3. filter: declare variable , condition -> return array, all matched value/obj
    const cheap = products.filter(product => product.price <= 5000);
    console.log(cheap);

    const specificNameCharacter = products.filter(product => product.name.includes('n));
    console.log(specificNameCharacter);


4. find: declare variable condition -> return object, but just 1st object/value
    const special = products.find(product => product.name.includes('n'));
    console.log(special);




*/