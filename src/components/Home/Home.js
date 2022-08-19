import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Home.css';
const Home = () => {
    return (
        <div className='display-home'>
            <h2>Select Any One</h2>
            <Link to={`${'rice'}`}>.Rice</Link>

            <Link to={`${'chicken'}`}>.Chicken</Link>

            <Link to={`${'beef'}`}>.Beef</Link>

            <Link to={`${'fish'}`}>.Fish</Link>

            <Link to={`${'vegetable'}`}>.Vegetable</Link>

            <Link to={`${'soup'}`}>.Soup</Link>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;