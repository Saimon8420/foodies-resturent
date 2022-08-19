import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { storedItem } from '../../Utilities/local-storage';
import Cart from '../Cart/Cart';
import FoodDetails from '../FoodDetails/FoodDetails';
import './Foods.css';
const Foods = () => {
    const { food } = useParams();
    const value = `s=${food}`;
    const [foods, setFoods] = useState([]);
    const [added, setAdded] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?${value}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFoods(data.meals));
    }, [value]);

    const addFood = (food) => {
        const exists = added.find(add => add.idMeal === food.idMeal)
        if (exists) {
            alert('Already Added');
        }
        else {
            const newCart = [...added, food];
            setAdded(newCart);
        }
    }
    const removeSelected = (item) => {
        const restCart = added.filter(add => add.idMeal !== item.idMeal);
        setAdded(restCart);
    }
    const total = () => {
        const price = (added.map(add => add.idMeal.slice(2, 4)));
        let priceTotal = 0;
        for (let each of price) {
            priceTotal = priceTotal + parseInt(each);
        }
        return priceTotal;
    }
    storedItem(added);
    return (
        <div className='food-head'>
            <h3>Menu Section: {food.toUpperCase()}</h3>
            <p style={{ 'fontWeight': 'bold' }}>Total item: {foods.length}</p>
            <div className='display'>
                <div className='food-display'>
                    {
                        foods.map(food => <FoodDetails
                            key={food.idMeal}
                            item={food}
                            addFood={addFood}
                        ></FoodDetails>)
                    }
                </div>
                <div className='cart'>
                    <div className='cart-display'>
                        <h4>Added food: {added.length}</h4>
                        {
                            added.map(add => <Cart
                                key={add.idMeal}
                                selected={add}
                                removeSelected={removeSelected}
                            ><Link to='/order'>Order</Link>
                            </Cart>)
                        }
                        <hr />
                        <p style={{ 'font-weight': 'bold' }}>Total Price: {total()}$</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Foods;