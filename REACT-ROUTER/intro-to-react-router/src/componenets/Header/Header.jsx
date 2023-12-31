import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to='/friends'>Friends</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">contact</Link>
        </nav>
    );
};

export default Header;