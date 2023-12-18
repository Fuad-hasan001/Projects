const nayok = {
    name: 'Sakib Khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['Apu', 'Raaj', 'salman', 'amir' ],
    movies: [
        {name: 'no1', year: 2015}, 
        {name: 'king Khan', year: 2018}
    ],
    act: function(){
        console.log('acting like sakib Khan')
    },
    car: {
        brand: 'tesla',
        price: 50000000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask', 
            country: 'USA'

        }
    }
}
// console.log(student);
// console.log(student.friends);
// console.log(student.car);
console.log(nayok.act);
nayok.act();

/***
 * object 2 purpose: object properties, object function
 */
