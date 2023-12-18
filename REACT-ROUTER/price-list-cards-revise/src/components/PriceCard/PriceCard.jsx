import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        // card
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-purple-700 text-5xl font-extrabold'>{price.price}</span>

                <span className='text-2xl text-white'>/month</span>
            </h2>

            <h5 className='text-2xl text-center my-6 font-bold'>{price.name}</h5>

            <p className='font-bold text-white underline'>Features:</p>
            {
                // single text
                price.features.map((feature, idx) => <Feature
                key={idx}
                feature={feature}
                ></Feature>)
            }
            <button className='w-full bg-green-500 hover:bg-green-700 rounded-md text-white py-2 mt-auto'>Buy Now</button>
        </div>
    );
};

export default PriceCard;