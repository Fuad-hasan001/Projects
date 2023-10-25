// Auto load data and display the data 
// call in js
// at first : fetch > function to 
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts){
    // console.log(posts);
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        // console.log(post);
        const div = document.createElement('div');
        div.classList.add('posts');//add class
        div.innerHTML = `
        <h4>user-${post.userId}</h4>
        <h5>post: ${post.title} </h5>
        <p>Post Description: ${post.body}</p>
        `; 
        postContainer.appendChild(div);
    }
}

loadPosts();

