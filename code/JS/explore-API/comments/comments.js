function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => displayComments(data));
}
// get the value
function displayComments(comments){
    // console.log(comments);
    // where to put 
    const userComments = document.getElementById('user-comments');
    for(const comment of comments){
    // console.log(comment);
    const div = document.createElement('div');
    div.classList.add('comment');
    div.innerHTML = `
        <h4>name:${comment.name} </h4>
        <p>userId:${comment.id} </p>
        <p>email: ${comment.email}</p>
        <p>comments:${comment.body} </p>
    `
    userComments.appendChild(div);
    }
}

// auto display or load : self call
loadComments();