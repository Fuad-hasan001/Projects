import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([])

    useEffect(()=>{
        fetch('prices.json')
        .then(response => response.json())
        .then(data => setPrices(data))
    },[])

    return (
        // root
        <div className='mx-12'>
            <h2 className='text-6xl text-center text-purple-800 bg-purple-300 font-bold p-4 '>Awsome Affordable Price</h2>

            {/* card root */}
            <div className='grid md:grid-cols-3 gap-3'>
            {
                prices.map(price => <PriceCard
                key={price.id}
                price={price}
                ></PriceCard>)
            }
            </div>
        </div>
    );
};

export default PriceList;