import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Carts.css'

const Carts = () => {
    const [products, setProducts] = useState([]) ;

    useEffect( () => {
        fetch('products.json')
        .then( res => res.json())
        .then(data =>setProducts(data))
        
    }, []);

    const [] = products ;
    return (
        <div className='main_prod_body'>
            <div className='product_body'>
                
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        ></Product>)
                }
            </div>

            <div className='info_body'>
                <p>Order Summary</p>
            </div>
        </div>
    );
};

export default Carts;