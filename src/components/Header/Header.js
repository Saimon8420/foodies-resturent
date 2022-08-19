import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div className='display-header'>
            <h1>Welcome Foodies!</h1>
            <div>
                <Link to='/home'>Home</Link>
                <Link to='/order'>Order</Link>
                <Link to='/about'>About</Link>
                <Link to='/login'>{user ? <button onClick={logout}>Sign Out</button> : 'Login'
                }
                </Link>
            </div>
        </div>
    );
};

export default Header;