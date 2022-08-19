const storedItem = (items) => {
    const itemId = items.map(item => item.idMeal);
    console.log(itemId);
    localStorage.setItem('stored-cart', JSON.stringify(itemId));
    // const storedCart = localStorage.getItem('stored-cart')
    // if (storedCart) {
    //     cart = JSON.parse(storedCart);
    // }
    // const quantity = cart[items];
    // if (quantity) {
    //     cart[items] = quantity + 1;
    // }
    // else {
    //     shoppingCart[id] = 1;
    // }
}

const getItem = () => {

    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('stored-cart');

    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    console.log(shoppingCart);
    return shoppingCart;
}
export { storedItem, getItem };