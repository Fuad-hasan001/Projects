document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    // console.log(friends);
    for(const friend of friends){
        friend.style.backgroundColor = 'lightblue';
    }
});

document.getElementById('center-third').addEventListener('click', function(){
    const third = document.getElementById('third-friend');
    third.style.textAlign = 'center' ;
});

document.getElementById('add-friend').addEventListener('click', function(){
    // console.log('adding');
    // where to set
    const friendContainer = document.getElementById('friends');
    // what to set
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
    <h3 class = "friend-name">New Friend</h3>
    <p>Something new added<p>
    `
    // how to set/ SET
    friendContainer.appendChild(friend);
})