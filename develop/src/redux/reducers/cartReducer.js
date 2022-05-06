import { actionTypes } from "../actions";

const initialState = {
  cartItems: [],
  addedItems: [],
  totalQuantity: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      let addedItem = state.cartItems.find(
        (item) => item.name.common === action.name.common
      );
      //check if the action id exists in the addedItems
      let existed_item = state.addedItems.find(
        (item) => action.name.common === item.name.common
      );
      if (existed_item) {
        action.totalQuantity += 1;
        return {
          ...state,
          totalQuantity: (action.totalQuantity += 1),
        };
      } else {
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          totalQuantity: 1,
        };
      }
    case actionTypes.REMOVE_FROM_CART:
      return state;
    default:
      return state;
  }
};
