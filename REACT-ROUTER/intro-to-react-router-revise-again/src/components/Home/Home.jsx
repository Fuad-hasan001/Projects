import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import First from '../First/First';

const Home = () => {
    return (
        <div>
            <Header></Header>
            {/* <h2>This is HOME page</h2> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;