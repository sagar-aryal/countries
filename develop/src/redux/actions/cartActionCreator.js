import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export const addToCart = (country) => {
  return {
    type: ADD_TO_CART,
    payload: country,
  };
};

export const removeFromCart = (country) => {
  return {
    type: REMOVE_FROM_CART,
    payload: country,
  };
};
