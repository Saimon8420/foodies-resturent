import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
    return (
        <div className='display-home'>
            <h2>Select Any One</h2>
            <Link to={`/home/${'rice'}`}>.Rice</Link>

            <Link to={`/home/${'chicken'}`}>.Chicken</Link>

            <Link to={`/home/${'beef'}`}>.Beef</Link>

            <Link to={`/home/${'fish'}`}>.Fish</Link>

            <Link to={`/home/${'vegetable'}`}>.Vegetable</Link>

            <Link to={`/home/${'soup'}`}>.Soup</Link>

        </div>
    );
};

export default Home;