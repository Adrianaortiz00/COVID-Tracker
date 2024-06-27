import CardGlobal from "./CardGlobal"
import cardLabels from "../../data/tracker1GlobalCards";
import { PropTypes } from "prop-types";

const GlobalDataCards = ( { data } ) => {
  const { cases, recovered, deaths, todayDeaths } = data;
  const stats = [cases, recovered, deaths, todayDeaths];
  return (
    <section className="my-10 flex flex-wrap gap-1">
      {stats?.map((stat, index) => (
        <CardGlobal key={index} icon={cardLabels[index].icon} title={cardLabels[index].label} data={stat}/>
      ))}
      <CardGlobal icon={cardLabels[cardLabels.length-1].icon} title={cardLabels[cardLabels.length-1].label} data={198}/>
    </section>
  )
}

GlobalDataCards.propTypes = {
  data: PropTypes.object
};

export default GlobalDataCards;
