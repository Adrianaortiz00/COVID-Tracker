import { useState } from 'react';
import useOneCountryData from '../../services/useOneCountryData';
import SelectCountry from "../../components/tracker1/SelectCountry";
import CardGroup from '../../components/tracker1/CardGroup';

const Tracker1 = () => {
  const [selectedCountry, setSelectedCountry] = useState('Afghanistan');
  const {data} = useOneCountryData(selectedCountry);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  }

  if ( data == null ) {
    return <div className='container m-auto w-full'><h2>Loading...</h2></div>;
  }

  if (!data) {
    return <div>Sorry, no data found.</div>;
  }
  
  let { updated } = data;
  const updateDate = new Date(updated).toLocaleDateString("en-US", {month: 'long', day: 'numeric', year: 'numeric'});

  return (
    <article className="p-5 bg-[#F7F8FC] text-gray-dark">
      <section className="select-section flex justify-between mb-8 pb-4 border-gray-light border-b">
        <SelectCountry onChange={handleCountryChange}/>
        <p className="font-medium">Updated: {updateDate}</p>
      </section>
    <CardGroup data={data}/>
    </article>
  );
};

export default Tracker1;
