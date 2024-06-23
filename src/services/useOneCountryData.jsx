import { API_BASE_URL_COUNTRIES } from "../config/urls";
import useApi from "./useApi";

const useOneCountryData = ( country ) => {
  return useApi(`${API_BASE_URL_COUNTRIES}${country}`);
}

export default useOneCountryData;
