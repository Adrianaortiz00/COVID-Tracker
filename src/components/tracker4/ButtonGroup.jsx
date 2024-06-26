import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import useApi from "../../services/useApi";
import { API_URL_CASES_SORTED } from "../../config/urls";
import CountryButton from "./CountryButton";

const ButtonGroup = ({ onClick, onDataLoad }) => {
  let data = useApi(API_URL_CASES_SORTED);
  const [buttonSelected, setButtonSelected] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      onDataLoad(data[0].country);
      if (buttonSelected == null) {
        setButtonSelected(data[0].country);
      }
    }
  }, [data, onDataLoad, buttonSelected]);

  const handleClick = (country) => {
    onClick(country);
    setButtonSelected(country);
  }

  if ( data == null ) {
    return <div className='container m-auto w-full'><h2>Loading...</h2></div>;
  }

  if (!data) {
    return <div>Sorry, no data found.</div>;
  }
  
  return (
    <div className='flex flex-wrap gap-3 mb-10'> 
      {
        data?.slice(0, 10).map((country, index) => (
          <CountryButton  
          onClick={handleClick}
          country={country.country} 
          flag={country.countryInfo.flag} 
          key={index}
          isSelected={country.country === buttonSelected}/>
        ))
      }
    </div>
  )
}

ButtonGroup.propTypes = {
  onClick: PropTypes.func,
  onDataLoad: PropTypes.func
};

export default ButtonGroup
