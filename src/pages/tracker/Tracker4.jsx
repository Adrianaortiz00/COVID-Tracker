import { useState } from 'react';
import { API_BASE_URL_GLOBAL } from "../../config/urls";
import CardGroup from '../../components/tracker/CardGroup';
import useApi from '../../services/useApi';
import ButtonGroup from '../../components/tracker4/ButtonGroup';

const Tracker4 = () => {
  const [selectedCountry, setSelectedCountry] = useState('Afghanistan');
  const data =  useApi(API_BASE_URL_GLOBAL);

  const handleCountryChange = (country) => {
    console.log(country);
    setSelectedCountry(country);
  }

  if ( data == null ) {
    return <div className='container m-auto w-full'><h2>Loading...</h2></div>;
  }

  if (!data) {
    return <div>Sorry, no data found.</div>;
  }
  
  return (
    <article className="p-5 bg-[#F7F8FC] text-gray-dark">
      <section>
        <h2 className='text-xl font-semibold text-dark-blue-1 border-b-[1px] border-gray-super-light mb-7 pb-2'>Covid-19 Country Wise - Tabs</h2>
        <ButtonGroup onClick={handleCountryChange}/>
        <CardGroup country={selectedCountry} />
      </section>
    </article>
  );
};

export default Tracker4;