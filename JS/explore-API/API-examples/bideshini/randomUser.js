// const loadUser = () => {
//     fetch('https://randomuser.me/api/?gender=female')
//     .then(response => response.json())
//     .then(data => displayUser(data));
// }

// const displayUser = user => {
//     // console.log(user.results[0]);
//     const genderTag = document.getElementById('gender');
//     genderTag.innerHTML = user.results[0].gender ;

//     // console.log(user.results[0].name.first)
//     const nameTag = document.getElementById('name');
//     nameTag.innerHTML = user.results[0].name.first;
// }

// loadUser()
// ----------------------------------------------

/* 
//1
const fn.-name = parameter(initial call) => {

}
//2
const fn.-name parameter => {

}

*/
const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(response => response.json())
    .then(data => displayUser(data))
}

const displayUser = user => {
    console.log(user);

    const userPhoto = document.getElementById('photo');
    userPhoto.innerHTML = user.results[0].picture.medium;

    const nameTag = document.getElementById('name');
    const userName = user.results[0].name.title +  ' ' + user.results[0].name.first + ' ' + user.results[0].name.last ;
    nameTag.innerHTML = userName //also use innerText

    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = user.results[0].gender; //also use innerText

    const userLocation = document.getElementById('location');
    userLocation.innerHTML = user.results[0].location.city

    /* another way to display location */
    /* const userSection = document.getElementById('user-info');
    const p = document.createElement('p');
    p.innerText ="Paragraph: " + user.results[0].location.city;
    userSection.appendChild(p); */

    // const location = document.getElementById('location');
    // location.innerHTML = `
    // <p>Location: ${user.results[0].location.city} </p>
    // `
    
}

loadUser();