import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';


const Home = () => {
    const tshirts = useLoaderData();
    // console.log(tshirts);
    const [cart, setCart] = useState([])

    //root add handler fn. buy-now-btn from t-shirt.jsx
    const handleAddToCart = (tshirt) => {
        // console.log(tshirt);

        // extra add condition
        const exist = cart.find(ts => ts._id === tshirt._id)
        if (exist) {
             toast('You have already added This item');
        }
        else {
            const newCart = [...cart, tshirt]
            setCart(newCart);
        }

    }

    // remove
    const handleRemoveFromCart = (id) => {
        // console.log(id)
        const remaining = cart.filter(ts => ts._id !== id)
        setCart(remaining)
    }
    return (
        <div className='home-container'>
            <div className='shop-container grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>

            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>

        </div>
    );
};

export default Home;