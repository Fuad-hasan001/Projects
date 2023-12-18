import React, { useState } from 'react';
import './Navbar.css'
import Link from '../Link/Link';
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

    const [open, setOpen] = useState(false)
    
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Products", path: "/products" },
    ];


    return (
        <nav className='bg-purple-400 px-4'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>{
                    open === true ?
                    <XCircleIcon className="h-6 w-6 text-purple-500" />
                    : <Bars3Icon className="h-6 w-6 text-purple-500" />
                }
                </span>


            </div>
            <ul className={`md:flex absolute duration-500 pl-8 pb-4 pt-4 justify-center bg-purple-400 md:static
                ${open ? 'top-6' : '-top-40'}`}>
                {
                    // routes.map(route => <li>{route.name}</li> )
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;