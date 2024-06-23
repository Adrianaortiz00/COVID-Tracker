import CardVirus from "../../components/tracker1/CardVirus";
import { PropTypes } from "prop-types";

const CardGroup = ( { data }) => {
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
    <section className="cards flex gap-9 w-[65%] flex-wrap">
    {stats.map((stat, index) => (
      <CardVirus key={index} data={stat} color={colors[index]}/>
    ))}
    </section>
  )
}

CardGroup.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};

export default CardGroup
