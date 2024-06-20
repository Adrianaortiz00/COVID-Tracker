
import useCountriesData from "../../services/useCountriesData";

const SelectCountry = () => {
  const { data } = useCountriesData();
  return (
    <select name="country" id="country">
      {data?.map((country, index) => (
        <option key={index} value={country.country}>
          {country.country}
        </option>
      ))}
      <option value="all">All</option>
    </select>
  )
}

export default SelectCountry
