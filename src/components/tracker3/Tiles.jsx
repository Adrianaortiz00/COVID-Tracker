import { PropTypes } from "prop-types";
import  CardTiles from "./CardTiles";

const Tiles = ({ data }) => {
    const sortAndSlice = (key, ascending = false) => {
      return data
        .sort((a, b) => (ascending ? a[key] - b[key] : b[key] - a[key]))
        .slice(0, 10);
    };
  
    const topCases = sortAndSlice("TopCases");
    const todayCases = sortAndSlice("TodayCases");
    const todayDeaths = sortAndSlice("TodayDeaths");
    const todayDeathsInverted = sortAndSlice("TodayDeathsInverted", true);
    const topActive = sortAndSlice("TopActive");
    const topRecover = sortAndSlice("TopRecover");
  
 // Función para generar las tablas
 const generateTable = (title, data, key) => {
    const tableData = data.map((valor) => ({
      key: valor.country,
      flag: valor.CountryFlag,
      country: valor.NameCountry,
      cases: valor[key],
    }));

    return (
      <div className="flex-1 flex flex-col mb-6 p-2">
        <h3 className="text-dark-blue-2 font-semibold mt-5 mb-4">{title}</h3>
        <div className="flex flex-col gap-2">
          {tableData.map((country, index) => (
            <CardTiles
              key={index}
              flag={country.flag}
              country={country.country}
              cases={country.cases}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="px-5 py-0 bg-gray-sidebar">
      <div className="px-5 py-[15px] border-b-[rgba(0,0,0,0.12)] border-b border-solid">
        <h2 className="font-poppins font-normal text-[22px] leading-[1.2] text-dark-blue-1 mb-0">
          Top 10 Country wise Covid-19 Updates - Tiles
        </h2>
      </div>
      <div className="flex flex-wrap gap-4">
        {generateTable('Top Cases', topCases, 'TopCases')}
        {generateTable('Today Cases', todayCases, 'TodayCases')}
        {generateTable('Today Deaths', todayDeaths, 'TodayDeaths')}
        {generateTable('Today Deaths', todayDeathsInverted, 'TodayDeaths')}
        {generateTable('Top Active', topActive, 'TopActive')}
        {generateTable('Top Recover', topRecover, 'TopRecover')}
      </div>
    </div>
  );
};

  
  Tiles.propTypes = {
    data: PropTypes.array.isRequired,
  };
   
  
  export default Tiles;
  