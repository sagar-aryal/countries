import { actionTypes } from "../actions";

const initialState = {
  countries: [],
  loading: false,
  error: "",
};

export const countriesReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case actionTypes.FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_COUNTRIES_SUCCESS:
      return {
        loading: false,
        countries: action.payload,
        error: "",
      };
    case actionTypes.FETCH_COUNTRIES_ERROR:
      return {
        loading: false,
        countries: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
