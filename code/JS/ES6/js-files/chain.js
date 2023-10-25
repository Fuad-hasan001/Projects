/*
const users = [
    { id: 1, name: 'abul', job: 'doctor' }

]
console.log(users.name); //it doesn't work
console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        { id: 1, name: 'kabul', job: 'doctor' },
        { id: 1, name: 'babul', job: 'doctor' }
    ]

}
console.log(data.data[0].name);
*/
const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street:{
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postoffice: 'cantonment',
        city: 'Dhaka'
    }
}
const userFloor = user.address.stret?.second;
console.log(userFloor);