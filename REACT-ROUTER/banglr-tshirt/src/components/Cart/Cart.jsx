import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    
    // Extra: conditional rendering
    let message;
    if(cart.length === 0){
        message = <p>Please add some product</p>
    }
    else{
        message = <div>
            <p>Boroloxx</p>
            <h3><small>Thanks for wasting your money</small></h3>
        </div>

    }
    return (
        <div>
            <h2 className={cart.length ===1 ? 'blue' : 'red'}>Order Summary: {cart.length}</h2>
            <p className={`bold ${cart.length === 3 ? 'yellow' : 'purple'}`}>Something</p>

            { cart.length > 2 ? <span>Aro kino</span> : <span>fokira</span>}
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name}
                    <button
                        onClick={() => handleRemoveFromCart(tshirt._id)}
                    >X</button>
                </p>)
            }

            {
                cart.length === 2 && <p>Double Bonanza!!</p>
            }
        </div>
    );
};

export default Cart;


/**
 * Conditional Rendering
 * 1. use if else to set a variable that will contain an element, (mainly condition wise kichu ekta hobe)
 * 2.ternary operator: condition ? 'for true' :' false' (alternative of if-else)
 * 3.Logical &&: (if the condition is true then the next things will be displayed)
 * 4.Logical || : (if the condition is false then the next things will be displayed)
 */


/**
 * Conditional css class
 * use ternary
 * ternary inside template string
 * 
 */
