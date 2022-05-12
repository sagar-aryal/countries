import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { countriesReducer } from "./countriesReducer";

export const rootReducers = combineReducers({
  allCountries: countriesReducer,
  cart: cartReducer,
});
