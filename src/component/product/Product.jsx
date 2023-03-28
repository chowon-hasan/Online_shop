import React from 'react';
import './product.css' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props.product)
    const {id, name, category, img, price, quantity, ratings, seller} = props.product ;

    const cartHandler = props.evenhandler ;

    return (
        <div className='single_cart'>
            <img src={img} alt="" />
            <div>
            <h2>{name}</h2>
            <h4 className='price'>Price: {price} $</h4>
            <p className='seller'>Manufacturer {seller}</p>
            <p>Rating : {ratings} star</p>
            </div>
            <button className='cart_button' onClick={() => cartHandler(props.product)}>
                Add to Cart 
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>

        </div>
    );
};

export default Product;