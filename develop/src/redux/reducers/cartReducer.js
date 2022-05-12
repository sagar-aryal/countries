import { actionTypes } from "../actions";

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case actionTypes.REMOVE_FROM_CART:
      const deletedItem = action.payload;
      const updatedItems = state.cartItems.filter(
        (item) => item !== deletedItem
      );
      return {
        ...state,
        cartItems: [...updatedItems],
      };

    default:
      return state;
  }
};
