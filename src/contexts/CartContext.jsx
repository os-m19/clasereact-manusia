import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      const newCart = [...cartItems];
      newCart[index].amount = newCart[index].amount + item.amount;
      setCartItems(newCart);
    } else {
      setCartItems([...cartItems, item]);
    }
  };
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{cartItems, addItem, setCartItems, clearCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;