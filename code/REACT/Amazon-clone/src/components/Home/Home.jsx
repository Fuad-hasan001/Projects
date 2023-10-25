import React from 'react';
import './Home.css'
import image from '../../images/header phoro.png'
const Home = () => {
    return (
        <div className='home'>
            <div className='advertise'>
                <h6>Sale up to 70% off</h6>
                <h1>New Collection For Fall</h1>
                <h4>Discover all the new arrivals of ready-to-wear collection.</h4>
                <button className='btn-shop-now'>SHOP NOW</button>
            </div>
            
            <div className='img-home'>
                <img src={image} alt="" />
            </div>


        </div>
    );
};

export default Home;