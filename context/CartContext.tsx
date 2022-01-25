import { createContext, useContext, useEffect, useReducer, useState } from "react";
import Butter from 'buttercms'
import { cartReducer } from "./CartReducer";

export type Product = {
  id: number,
  name: string,
  description: string,
  image: string,
  price: number,
  quantity: string
};

export interface Init {
  cart: Product[];
  totalItems: number;
  totalAmount: number;
  bounce: boolean;
  removeProduct?: (id: number) => void;
  addProduct?: (selectedProducts: Product) => void;
  bouceEnd?: () => void;
}

const initialState = {
  cart: [],
  totalItems: 0,
  totalAmount: 0,
  bounce: false
};
export const CartContext = createContext(null)

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  console.log("🚀 ~ file: CartContext.tsx ~ line 34 ~ CartProvider ~ state", state)

  const removeProduct = (id: number) => {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: id,
    });
  };

  const addProduct = (selectedProducts: Product) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: selectedProducts,
    });
  };

  const bouceEnd = () => {
    dispatch({
      type: "BOUNCE_END",
    });
  };

  return (
    <CartContext.Provider value={{
      cart: state.cart,
      totalItems: state.totalItems,
      totalAmount: state.totalAmount,
      bounce: state.bounce,
      removeProduct,
      addProduct,
      bouceEnd,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider