import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
            <nav className='flex justify-around items-center bg-teal-500 w-2/3 mx-auto my-5 py-1 '>
                <div className=''>
                    <Link to='/'>Home</Link>
                    <Link to='/aboutMe'>About Me</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/caseStudies'>Case Studies</Link>
                </div>

                <img className='rounded-full' src="small-profile-photo.jpg" alt="" />
            </nav>
    );
};

export default Header;