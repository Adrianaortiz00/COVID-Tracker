import CardVirus from "./CardVirus";
import { PropTypes } from "prop-types";
import useApi from '../../services/useApi';
import { API_BASE_URL_COUNTRIES } from "../../config/urls";

const CardGroup = ( { country }) => {
  const data = useApi(`${API_BASE_URL_COUNTRIES}${country}`);

  if ( data == null ) {
    return <div className='container m-auto w-full'><h2>Loading...</h2></div>;
  }

  if (!data) {
    return <div>Sorry, no data found.</div>;
  }

  const { cases, deaths, recovered, active, todayCases, todayDeaths } = data;
  const stats = [
    { label: "Total Cases", value: cases },
    { label: "Total Deaths", value: deaths },
    { label: "Total Recovered", value: recovered },
    { label: "Total Active", value: active },
    { label: "New Cases", value: todayCases },
    { label: "New Deaths", value: todayDeaths }
  ];
  const colors = ["defult","red","green","blue","orange","redark"]

  return (
    <section className='cards basis-[38.3rem] flex gap-9 flex-wrap'>
    {stats.map((stat, index) => (
      <CardVirus key={index} data={stat} color={colors[index]}/>
    ))}
    </section>
  )
}

CardGroup.propTypes = {
  country: PropTypes.string,
  width: PropTypes.string
};

export default CardGroup
