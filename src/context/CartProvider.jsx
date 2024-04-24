import React, { createContext, useEffect, useState } from 'react';
export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [itemAmount, setItemAmount] = useState(0);
    const [total, setTotal] = useState(0);

useEffect(() => {
    if(cart){
        const amount = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.amount;
        }, 0);
        setItemAmount(amount);
    }
})
useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.presentPrice * currentItem.amount;
    }, 0);
    setTotal(total);
})
    const addToCart = (product, id) => {
        const newItem = { ...product, amount: 1 };
        console.log(product);
        const cartItem = cart.find((item) => {
            return item.id == id ;
        });
        // if cart item is already in the cart
        if (cartItem) {
            const newCart = [...cart].map(item => {
                if (item.id == id) {
                    return { ...item, amount: cartItem.amount + 1};
                }
                else {
                    return item;
                }
            });
            setCart(newCart);
        }
        else {
            setCart([...cart, newItem]);
        }
    }
    // remove single item
    const removeFromCart = (id) => {
        const newCart = cart.filter(item => {
            return item.id !== id;
        });
        setCart(newCart);
    }
    // remove all cart data
    const clearCart = () => {
        setCart([]);
    }

    // increase
    const increaseAmount = (id) => {
        const cartItem = cart.find(item => item.id === id);
       
        addToCart(cartItem, id);
    }
    // increase
    const dicreaseAmount = (id) => {
        const cartItem = cart.find(item => {
            return item.id === id
        });
        if(cartItem){
            const newCart = cart.map(item => {
                if(item.id === id){
                    return {...item, amount:cartItem?.amount - 1};
                }
                else{
                    return item;
                }
            });
            setCart(newCart);
        }
        if(cartItem.amount < 2){
            removeFromCart(id);
        }
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseAmount, dicreaseAmount, itemAmount, total }}>
            {children}
        </CartContext.Provider>);
};

export default CartProvider;