import PropTypes from "prop-types";
import useCountriesData from "../../services/useCountriesData";

const SelectCountry = ( { onChange } ) => {
  const { data } = useCountriesData();

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <select name="country" id="country" onChange={handleChange} className="font-medium px-9 py-3 bg-white rounded">
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
