import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
const Cart = ({ selected, removeSelected, children }) => {
    const name = selected.strMeal.length > 12 ? `${selected.strMeal.slice(0, 10)}` : `${selected.strMeal}`;

    const [quantity, setQuantity] = useState(1);

    const itemIncrease = () => {
        setQuantity(quantity + 1);
    };
    const itemDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const totalPrice = () => {
        let price = parseInt(selected.idMeal.slice(2, 4));
        price = price * quantity;
        return price;
    };
    return (
        <div>
            <div className='display-cart'>
                <img src={selected.strMealThumb} alt="" />
                <p title={selected.strMeal}>{name}...</p>

                <div className='quantity-btn'>
                    <button onClick={itemIncrease}>+</button>
                    <p> {quantity}</p>
                    <button onClick={itemDecrease}>-</button>
                </div>

                <p id='price'><small style={{ 'fontWeight': 'bold' }}> Price:{totalPrice()}$</small></p>

                <button
                    onClick={() => removeSelected(selected)}
                ><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
            </div>
        </div>
    )
};

export default Cart;