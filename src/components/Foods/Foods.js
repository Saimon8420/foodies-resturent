import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
    }, []);

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

    // const [quantity, setQuantity] = useState(1);

    // const itemIncrease = () => {
    //     setQuantity(quantity + 1);
    // };
    // const itemDecrease = () => {
    //     if (quantity > 1) {
    //         setQuantity(quantity - 1);
    //     }
    // };

    // const [priceTotal, setPriceTotal] = useState([]);

    const total = () => {
        let totalPrice = 0;
        let price = added.map(add => parseInt(add.idMeal.slice(2, 4)));
        for (let total of price) {
            totalPrice = totalPrice + total;
        }
        return totalPrice;
    }
    let totalPrice = 0;
    const quantity1 = item => {
        console.log(item);
        let price = added.map(add => parseInt(add.idMeal.slice(2, 4)));
        for (let total of price) {
            let priceInit = total * item;
            totalPrice = totalPrice + priceInit;
        }
        console.log(totalPrice);
    }
    // console.log(quantity1);
    // const grandTotal = price => {
    //     setPriceTotal(price);
    // }
    // console.log(priceTotal);

    // let grandtotal = 0;
    // grandtotal = grandtotal + priceTotal;
    // console.log(grandtotal);

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
                                // grandTotal={grandTotal}
                                quantity1={quantity1}
                            ></Cart>)
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