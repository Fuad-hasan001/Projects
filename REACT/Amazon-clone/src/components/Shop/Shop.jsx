import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(Response => Response.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='shop-container'>

            <div className='products-container'>
                {
                    products.map(product => <Product 
                        product = {product}
                        key = {product.id}
                        
                        ></Product>)
                }
            </div>

            <div className='cart-container'>
                <h3>Order Summary</h3>
            </div>
        </div>
    );
};

export default Shop;