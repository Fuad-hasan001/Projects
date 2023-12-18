import React, { useState } from 'react';
import LInk from '../Link/LInk';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Navbar = () => {

    // declare state: 
    const [open, setOpen] = useState(false);
    // local data: 
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Products", path: "/products" },
    ];

    return (
        <nav className='bg-purple-400 px-4'>
            {/* <div onClick={() => setOpen(!open)}>
                <span>{open === true ? 'open' : 'close'}</span>

                <Bars3Icon className="h-6 w-6 text-purple-500" />
                <XMarkIcon className="h-6 w-6 text-purple-500" />
            </div> */}
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {
                    open === true ? 
                    <XMarkIcon className="h-6 w-6 text-purple-500"/> 
                    :
                    <Bars3Icon className="h-6 w-6 text-purple-500" />
                        
                    }
                </span>
            </div>
            <ul className={`md:flex absolute md:static duration-500  bg-purple-400 text-black pl-8 py-2 pb- ${open ? 'top-6' : '-top-36'}`}>
                {
                    // routes.map(route => <li>{route.name}</li>)
                    routes.map(route => <LInk
                        key={route.id}
                        route={route}
                    ></LInk>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;