import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg' ;


const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='head_nav'>
                <ul>
                    <a href="#">Order</a>
                    <a href="#">Order Review</a>
                    <a href="#">Manage Inventory</a>
                    <a href="#">Log In</a>
                </ul>
            </div>
        </nav>
    );
};

export default Header;