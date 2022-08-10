import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className='display-header'>
            <h1>Welcome Foodies!</h1>
            <Link to='/home'>Home</Link>
            <Link to='/order'>Order</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Header;