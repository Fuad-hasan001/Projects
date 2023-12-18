import React, { useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {
    const tShirts = useLoaderData();
    // console.log(tShirts);

    const [cart, setCart] = useState([])

    // Total Product Cost:
    // const [cost, setCost] = useState(1)

    const handleAddToCart = (tShirt) => {
        // console.log(tShirt)
        // const exist = cart.find(c => c._id === tShirt._id)
        const exist = cart.find(c => c._id === tShirt._id)

        if (exist) {
            toast('Already added')
        }
        else {
            const newCart = [...cart, tShirt]
            setCart(newCart)
        }
    }

    const handleRemoveFromCart = (id) =>{
        const remainingCart = cart.filter(c => c.id !== id)
        setCart(remainingCart)
    }

    return (
        <div className='home-container'>
            <div className='shop-container grid grid-cols-3 gap-2 '>
                {/* <h2>Shop</h2> */}
                {
                    tShirts.map(tShirt => <Tshirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}>
                    </Tshirt>)
                }

            </div>
            <div className='cart-container'>
                <h2>Order Summary</h2>
                <Cart cart={cart} handleRemoveFromCart = {handleRemoveFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;