import {
  FETCH_COUNTRIES_ERROR,
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
} from "./actionTypes";

export const fetchCountriesRequest = () => {
  return {
    type: FETCH_COUNTRIES_REQUEST,
  };
};

export const fetchCountriesSuccess = (countries) => {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: countries,
  };
};

export const fetchCountriesError = (error) => {
  return {
    type: FETCH_COUNTRIES_ERROR,
    payload: error,
  };
};
