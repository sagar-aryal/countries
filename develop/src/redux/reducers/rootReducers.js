import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { countriesReducer } from "./countriesReducer";

export const rootReducers = combineReducers({
  countries: countriesReducer,
  cart: cartReducer,
});
