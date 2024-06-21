import { API_BASE_URL_GLOBAL } from "../config/urls";
import useApi from "./useApi";

const useGlobalData = () => {
  return useApi(API_BASE_URL_GLOBAL)
}

export default useGlobalData;
