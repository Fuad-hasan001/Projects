// find & Access data form an object in the array
const users = [
    {id: 1, name: 'hablu', job: 'leader'}
];
console.log(users[0].name);

// find & access data from an array in the object
const data = {
    count: 50000,
    info: [
        {id: 2, name: 'kablu', job: 'leader2'},
        {id: 3, name: 'jablu', job: 'leader3'}
    ]
}
console.log(data.count);//normally show object data 
console.log(data.info[0].name);

// optional chaining: (?.)(value1.value2.value3...-means chaining)
/* purpose: 
value na thakle -undefined, value thakle- move forward
otherwise, get error: TypeError: Cannot read properties of undefined (reading 'second')
*/
const user = {
    name: 'Thomas albat Adison',
    address:{
        street: {
            first: '35/A kocukhet',
            second: 'third floor',
            third: 231
        }
    },
    postOffice: 'zigatola',
    city: 'dhaka'

}

const userFloor = user.address.stret?.second;
console.log(userFloor);