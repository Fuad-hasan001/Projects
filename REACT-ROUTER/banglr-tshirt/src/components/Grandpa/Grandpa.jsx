import React from 'react';
import './Grandpa.css'

import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

const Grandpa = () => {
    const data = [
        {name: "hero", id: 1221},
        {name: "Karim", id: 1222},
        {name: "Rahim", id: 1223}
    ]
    const result = data.find(person => person.id === 1221);
    console.log(result)


    return (
        <div className='grandpa'>
            <h1>Grandpa</h1>
            <section className='flex'>
                <Father></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
            
        </div>
    );
};

export default Grandpa;