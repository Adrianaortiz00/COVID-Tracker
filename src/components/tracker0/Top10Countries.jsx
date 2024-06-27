import { API_BASE_URL_COUNTRIES } from "../../config/urls";
import useApi from "../../services/useApi";
import CardTop10Country from "./CardTop10Country";

const Top10Countries = () => {
  const data = useApi(API_BASE_URL_COUNTRIES);
  console.log(data);

  if (!data) return null;

  const topCountries = data.sort((a, b) => b.cases - a.cases).slice(0, 10);
  console.log(topCountries);

  return (
    <div>
      <h3 className="text-dark-blue-2 font-semibold mt-6 mb-5">Top 10 Country</h3>
      {topCountries.map((country) => (
        <CardTop10Country
          key={country.country}
          flag={country.countryInfo.flag}
          country={country.country}
          cases={country.cases}
        />
      ))}
    </div>
  );
};

export default Top10Countries;
