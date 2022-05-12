import axios from "axios";
import { countriesActionCreator } from "../actions";

export const fetchCountries = () => {
  return async function ( dispatch ) {
    try {
      dispatch(countriesActionCreator.fetchCountriesRequest());
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const data = response.data;
      dispatch(countriesActionCreator.fetchCountriesSuccess(data));
    } catch (error) {
      dispatch(countriesActionCreator.fetchCountriesError(error.message));
    }
  };
};
