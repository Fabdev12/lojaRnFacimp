import React, { createContext, useState } from 'react';

export const CartContext = createContext({});

function CartProvider ({ children }){
  const [cart, setCart] = useState([]);

  function addItemCart(newItem){
    const indexItem = cart.findIndex(item => item.id === newItem.id)

    if(indexItem !== -1){

        const updatedCart = cart.map((item, index) =>
            index === indexItem
              ? { ...item, amount: item.amount + 1, total: (item.amount + 1) * item.price }
              : item
          );

        setCart(updatedCart)

        console.log(updatedCart)
        return;

    }

    let data = {
        ...newItem,
        amount: 1,
        total: newItem.price
    }

    setCart(products => [...products, data])
  }

  function removeItemCart(product) {
    const indexItem = cart.findIndex(item => item.id === product.id);
  
    if (indexItem !== -1) {
      if (cart[indexItem].amount > 1) {
        const updatedCart = cart.map((item, index) =>
          index === indexItem
            ? { ...item, amount: item.amount - 1, total: (item.amount - 1) * item.price }
            : item
        );
  
        setCart(updatedCart);
      } else {
        const updatedCart = cart.filter(item => item.id !== product.id);
        setCart(updatedCart);
      }
    }
  }
  
  function toAddItemCart(product) {
    const indexItem = cart.findIndex(item => item.id === product.id);
  
    if (indexItem !== -1) {
      const updatedCart = cart.map((item, index) =>
        index === indexItem
          ? { ...item, amount: item.amount + 1, total: (item.amount + 1) * item.price }
          : item
      );
  
      setCart(updatedCart);
    }
  }
  

  function getTotalItems() {
    return cart.reduce((total, item) => total + item.amount, 0);
  }

  function getTotalPrice() {
    return cart.reduce((total, item) => total + item.price * item.amount, 0);
  }

  return (
    <CartContext.Provider value={{ cart, addItemCart, getTotalItems, removeItemCart, toAddItemCart, getTotalPrice}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
