  import { useEffect, useMemo, useState, } from "react";
  import { PropTypes } from "prop-types";
  
  const Tiles = ({ data }) => {
  const topCountries = data.sort((a, b) => b.cases - a.cases).slice(0, 10);

 

    const tablaTopCases = topCountries.map(valor => {
        return {
        nombrepais: valor.NameCountry,
        flag: valor.CountryFlag,
        topcases: valor.Topcases
    };
    });

    console.log(tablaTopCases);

/*     const tablaTopActive = data.map(valor => {
        return {nombrepais: valor.NameCountry, flag: valor.CountryFlag, topActives: valor.TopActive};
    }); */
    
    return (
      <div className="px-5 py-0 bg-gray-sidebar">
        <div className="px-5 py-[15px] border-b-[rgba(0,0,0,0.12)] border-b border-solid">
          <h2 className="font-poppins font-normal text-[22px] leading-[1.2] text-dark-blue-1 mb-0">
            Top 10 Country wise Covid-19 Updates - Tiles
          </h2>
        </div>
        <div className="flex justify-between">
            <div>
                {tablaTopCases.map((pais, index) => {
                    return (
                        <div key={index}>
                            {/* <p>{element.nombrepais}</p> */}
                            <img src={pais.flag} alt={`Bandera de ${pais.nombrepais}`} />
                            <p>{pais.nombrepais} {pais.topcases}</p>
                        </div>
                    );
                })}    
            </div>
{/*             <div>
                {tablaTopActive.map((pais, index) => {
                    return (
                        <div key={index}>
                            <p>{element.nombrepais}</p>
                            <p>{element.flag}</p>
                            <p>{element.topActives}</p>
                        </div>
                    );
                })}    
            </div> */}
        </div>
      </div>
    );
  };
   
  
  Tiles.propTypes = {
    data: PropTypes.array,
  }
  


/*   return (
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
}; */




 /*  function DebouncedInput({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
  }) {
    const [value, setValue] = useState(initialValue);
    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);
  
    useEffect(() => {
      const timeOut = setTimeout(() => {
        onChange(value);
      }, debounce);
  
      return () => clearTimeout(timeOut);
    }, [value]);
  
    return (
      <input
        className="border h-10 max-w-[150px] ml-[0.5em] px-[15px] py-2.5 border-solid border-[#ccc]"
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    );
  } */

  
  export default Tiles;
  