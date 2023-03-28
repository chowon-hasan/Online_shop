import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Carts.css'

const Carts = () => {
    const [products, setProducts] = useState([]) ;
    const [cart, setcart] = useState([]) ;

    useEffect( () => {
        fetch('products.json')
        .then( res => res.json())
        .then(data =>setProducts(data))
        
    }, []);

    const carthandler= (product) => {
        const newCart = [...cart, product];
        setcart(newCart);
    }

    const [] = products ;
    return (
        <div className='main_prod_body'>
            <div className='product_body'>
                
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        evenhandler={carthandler}
                        ></Product>)
                }
            </div>

            <div className='info_body'>
                <h4>Order Summary</h4>
                <p>Selected irtems : {cart.length}</p>
            </div>
        </div>
    );
};

export default Carts;