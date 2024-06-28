import CountriesTable from "../../components/tracker2/CountriesTable";
import useApi from "../../services/useApi";

const Tracker2 = () => {
  const countries = useApi("https://disease.sh/v3/covid-19/countries") || [];
  const data = countries.map((country) => ({
    flag: country.countryInfo.flag,
    country: country.country,
    cases: country.cases,
    todayCases: country.todayCases,
    deaths: country.deaths,
    recovered: country.recovered,
    active: country.active,
    critical: country.critical,
    tests: country.tests,
  }));

  if (!data.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CountriesTable data={data} />
    </div>
  );
};

export default Tracker2;
