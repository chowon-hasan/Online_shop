import React from 'react';
import './product.css' ;

const Product = (props) => {
    console.log(props.product)
    const {id, name, category, img, price, quantity, ratings, seller} = props.product ;

    const cartHandler = props.evenhandler ;

    return (
        <div className='single_cart'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4 className='price'>Price: {price} $</h4>
            <p className='seller'>Manufacturer {seller}</p>
            <p>Rating : {ratings} star</p>
            <button className='cart_button' onClick={() => cartHandler(props.product)}>Add to Cart</button>

        </div>
    );
};

export default Product;