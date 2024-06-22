import { API_BASE_URL_COUNTRIES } from "../config/urls";
import useApi from "./useApi";

const useCountriesData = ( ) => {
  return useApi(API_BASE_URL_COUNTRIES)
}

export default useCountriesData;
