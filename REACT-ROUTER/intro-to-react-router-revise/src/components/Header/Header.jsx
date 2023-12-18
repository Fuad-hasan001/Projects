import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Friends">Friends</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
        </nav>
    );
};

export default Header;