import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt, handleAddToCart}) => {
    const {picture, name, price} = tshirt;

    
    return (
        <div className='t-shirt'>
            <img className='mx-auto' src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <button className='bg-yellow-400 hover:bg-green-400' onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
            
        </div>
    );
};

export default Tshirt;