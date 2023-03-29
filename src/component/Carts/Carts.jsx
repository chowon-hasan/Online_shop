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
    
    let total = 0 ;
    let shipping = 0 ;
    for (const p of cart){
        console.log(p.price)
        total = total + p.price ;
        shipping = shipping + p.shipping ;
    }
    const tax = total*7/100 ;

    const grandTotal = total + shipping + tax ;

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
                <p>Total Price : ${total}</p>
                <p>Total shipping charge : $ {shipping}</p>
                <p>Tax : ${tax.toFixed(2)}</p>
                <h5>Grand Total : $ {grandTotal.toFixed(2)}</h5>

                <div className='buttons_container'>
                    <button>Clear Cart</button>
                    <button>Review Order</button>
                </div>
            </div>
        </div>
    );
};

export default Carts;