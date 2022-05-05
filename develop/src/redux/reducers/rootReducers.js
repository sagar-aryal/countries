import { combineReducers } from "redux";
import { countriesReducer } from "./countriesReducer";

export const rootReducers = combineReducers({
  countries: countriesReducer,
});
