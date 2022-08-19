import React from 'react';
import { useState } from 'react';
import './Login.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [register, setRegister] = useState(false);
    const [name, setName] = useState('');

    const [createUserWithEmailAndPassword
    ] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const [updateProfile] = useUpdateProfile(auth);

    const [user] = useAuthState(auth);

    const handleName = (event) => {
        setName(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePass = (event) => {
        setPassword(event.target.value);
    }
    const handleCheck = (event) => {
        setRegister(event.target.checked);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (register) {
            createUserWithEmailAndPassword(email, password);
            updateProfile(name);
        }
        else {
            signInWithEmailAndPassword(email, password);
            console.log(user.email);
            console.log(user);
        }
        setEmail('');
        setPassword('');
    }
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/home';
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='login-display'>
            <div className='login-form'>
                <h2 style={{ 'color': 'gray' }}>Please {!register ? 'Login' : 'Register'} </h2>
                <form onSubmit={handleSubmit}>
                    {
                        register && <input style={{
                            'border-radius': '5px', 'border': '2px solid antiquewhite',
                            'padding': '5px'
                        }} onBlur={handleName} type="text" name="" id="" placeholder='your user_name' required />
                    }
                    <br /><br />
                    <input style={{
                        'border-radius': '5px', 'border': '2px solid antiquewhite',
                        'padding': '5px'
                    }} onBlur={handleEmail}
                        type="email" name="" id="" placeholder='your email' required />
                    <br /> <br />
                    <input style={{
                        'border-radius': '5px', 'border': '2px solid antiquewhite',
                        'padding': '5px'
                    }}
                        onBlur={handlePass}
                        type="password" name="" id="" placeholder='your password'
                        required />
                    <br />
                    <input style={{
                        'border-radius': '5px', 'padding': '5px 10px', 'margin-top': '10px', 'background-color': 'orange',
                        'border': 'none'
                    }}
                        type="submit" value={!register ? 'Login' : 'Register'} />
                    <br />
                    <p style={{ 'color': 'blue' }}><input type="checkbox" name="" id="" onChange={handleCheck} />Haven't any account?Then Register</p>
                </form>
            </div>
        </div>
    );
};

export default Login;