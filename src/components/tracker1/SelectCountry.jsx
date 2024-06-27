import PropTypes from "prop-types";
import useApi from '../../services/useApi';
import { API_BASE_URL_COUNTRIES } from "../../config/urls";

const SelectCountry = ( { onChange } ) => {
  const data  = useApi(API_BASE_URL_COUNTRIES);

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <select name="country" id="country" onChange={handleChange} className="font-medium px-6 py-3 bg-white rounded">
      {data?.map((country, index) => (
        <option key={index} value={country.country}>
          {country.country}
        </option>
      ))}
    </select>
  )
}

SelectCountry.propTypes = {
  onChange: PropTypes.func.isRequired
  };
export default SelectCountry
