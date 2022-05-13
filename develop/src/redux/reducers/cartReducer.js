import { actionTypes } from "../actions";

const cartFromLocalStorage = localStorage.getItem("cartItems");
let initialCart = [];
if (cartFromLocalStorage) {
  initialCart = JSON.parse(cartFromLocalStorage);
}

const initialState = {
  cartItems: initialCart,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const country = action.payload;

      // Save country to localstorage
      const cartCountry = [...state.cartItems, country];
      localStorage.setItem("cartItems", JSON.stringify(cartCountry));
      return {
        ...state,
        cartItems: [...state.cartItems, country],
      };
    }

    case actionTypes.REMOVE_FROM_CART: {
      const deletedItem = action.payload;
      const updatedItems = state.cartItems.filter(
        (item) => item !== deletedItem
      );

      // Save country to localstorage
      const cartCountry = [...updatedItems];
      localStorage.setItem("cartItems", JSON.stringify(cartCountry));
      return {
        ...state,
        cartItems: [...updatedItems],
      };
    }

    default:
      return state;
  }
};
