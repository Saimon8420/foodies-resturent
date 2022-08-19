import React from 'react';
import './FoodDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const FoodDetails = ({ item, addFood }) => {
    const type = item.strTags ? `${item.strTags}` : 'Not found';
    return (
        <div className='food-details'>
            <img src={item.strMealThumb} alt="" />
            <h4>Name: {item.strMeal}</h4>
            <h5>Food Region: {item.strArea}</h5>
            <p>Food type: {type}</p>
            <p><small style={{ 'font-weight': 'bold' }}>Price: {item.idMeal.slice(2, 4)}$</small></p>
            <div className='details-btn'>
                <button onClick={() => addFood(item)}>Add to Cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default FoodDetails;