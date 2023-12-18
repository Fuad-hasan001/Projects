import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    // data receive
    const posts = useLoaderData();
    console.log(posts)
    return (
        // component declare 
        <div>
            <h2>All posts are here:{posts.length}</h2>
            <div>
                {
                    posts.map(post => <Post
                    key={post.id}
                    post={post}
                    ></Post>)
                }
            </div>
        </div>

)};

export default Posts;