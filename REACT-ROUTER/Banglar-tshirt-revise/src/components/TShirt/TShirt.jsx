import React from 'react';
import './TShirt.css'

const Tshirt = ({ tShirt, handleAddToCart }) => {
    // console.log(tShirt)
    const { picture, name, gender, price } = tShirt
    return (

        <div className='tShirt-container mx-auto '>
            <img className='' src={picture} alt="" />
            <div className='tShirt-info bottom-20 left-5 rounded-2xl font-bold w-44 mx-3 py-3 hover:hidden'>
                <h2>{name}</h2>
                <p><small>gender: {gender}</small></p>
                <p>price: {price}</p>
            </div>
            <button onClick={() => handleAddToCart(tShirt)} className='mt-3 bg-red-700 hover:bg-green-700'>Buy Now</button>

        </div>
    );
};

export default Tshirt;