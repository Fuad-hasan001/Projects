import React from 'react';
import './Product.css'

const Product = (props) => {

    console.log(props.product)
    const { img, name, price, seller, ratings } = props.product;

    const handleCartToAdd = (product) =>{
        // console.log("added");
        console.log(product);
        
    }
    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price:{price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings}stars</p>
            </div>
            <button className='btn-cart' onClick={handleCartToAdd}>Add to cart</button>
        </div>
    );
};

export default Product;