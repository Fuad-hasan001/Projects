import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body} = post

    // 2nd way
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/post/${id}`);
    }

    return (
        <div>
            <h5>ID: {id}</h5>
            <h5>{title}</h5>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Details</Link>
            <Link to={`/post/${id}`}><button>Show me details</button></Link>
            <button onClick={handleNavigation}>With Button handler</button>
        </div>
    );
};

export default Post;