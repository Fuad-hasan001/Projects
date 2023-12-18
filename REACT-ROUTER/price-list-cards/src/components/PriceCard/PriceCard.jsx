import { list } from 'postcss';
import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-5 rounded-md p-4 flex flex-col '>
            <h2 className='text-center'>
                <span className='text-purple-700 text-white text-5xl font-extrabold'>80</span>
                <span className='text-2xl font-bold'>/month</span>
            </h2>
            <h5 className='text-2xl my-6 font-bold text-center'>{price.name}</h5>

            <p className='text-white underline font-bold'>Features: </p>
            {
                price.features.map((feature, idx) => <Feature
                key={idx}
                feature={feature}
                ></Feature>)
            }
            <button className='w-full mt-auto bg-green-400 py-2 rounded-md text-white hover:bg-green-500'>Buy Now</button>
        </div>
    );
};

export default PriceCard;