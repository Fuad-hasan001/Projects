const loadData = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(response => response.json())
    .then(data => displayData(data))
}

const displayData = userInfo =>{
    console.log(userInfo);
    const userInformation = document.getElementById('user-information');
    const userDiv = document.createElement('div');
    userDiv.classList.add('user-details')
    userDiv.innerHTML = `
        <img src="${userInfo.results[0].picture.thumbnail}">
        <h2> ${userInfo.results[0].name.first} </h2>
        <h5> ${userInfo.results[0].gender} </h5>
        <p> ${userInfo.results[0].phone} </p>
    `
    userInformation.appendChild(userDiv);
}

loadData();