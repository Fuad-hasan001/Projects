import React from 'react';
import './Cart.css'
import Tshirt from '../Tshirt/Tshirt';


const Cart = ({ cart, handleRemoveFromCart}) => {
    console.log(cart)

    let totalPrice = 0;
    for(const tShirt of cart){
        totalPrice = totalPrice + tShirt.price
    }
    return (
        <div className='border border-2 p-5'>
            <h2>Total Cart: {cart.length}</h2>
            <h2>Total Cost: {totalPrice}</h2>

            {
                cart.map(tShirt =><div 
                key={tShirt._id} 
                className='cart-container border-2 rounded-lg text-left p-2 mt-3 flex justify-between items-center relative'>


                <div className='cart-info'>
                    <img src={tShirt.picture} alt="" />
                    <h2>Name:{tShirt.name}</h2>
                </div>

                <p>Price: {tShirt.price}</p>

                <button onClick={() => handleRemoveFromCart(cart._id)} className='bg-red-700 text-xs w-4 h- p-0 m-0  text-center absolute top-1 right-1 border-0'>X</button>
            </div>)
            }

            
        </div>
    );
};

export default Cart;