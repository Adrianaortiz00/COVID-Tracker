import Tiles from "../../components/tracker3/Tiles.jsx";
import useApi from "../../services/useApi"

const Tracker3 = () => {
    const countries = useApi("https://disease.sh/v3/covid-19/countries") || [];
    const data = countries.map((country) => ({
        NameCountry: country.country,
        CountryFlag: country.countryInfo.flag,
        TopCases: country.cases,
        TodayCases: country.todayCases,
        TodayDeaths: country.todayDeaths,
        TodayDeaths: country.todayDeaths,
        TopActive: country.active,
        TopRecover: country.recovered,
    }));
  
    if (!data.length) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <Tiles data={data} />
      </div>
    );
  };
  
  export default Tracker3;