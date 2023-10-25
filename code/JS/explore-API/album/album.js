function loadAlbums(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(data => displayAlbums(data));
}

function displayAlbums(albums){
    // console.log(albums);

    const userAlbum = document.getElementById('user-album');
    for(const album of albums){
    console.log(album);
    const div = document.createElement('div');
    const ol = document.createElement('ol');
    ol.classList.add('album');
    const li = document.createElement('li');
    //    li.innerText = album.id;
    //    li.innerText = album.title;
    li.innerHTML = `
        <h4>ID: ${album.id} </h4>
        <p>Title: ${album.title} </p>
    `
    div.appendChild(ol);
    ol.appendChild(li);
    userAlbum.appendChild(ol)
    }
}
loadAlbums();