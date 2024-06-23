import CardGlobal from "./CardGlobal"
import useGlobalData from "../../services/useGlobalData";
import cardLabels from "../../data/tracker1GlobalCards"

const GlobalDataCards = () => {
  const globalData   = useGlobalData().data;

  if ( globalData == null ) {
    return <div className='container m-auto w-full'><h2>Loading...</h2></div>;
  }

  const { cases, recovered, deaths, todayDeaths } = globalData;
  const stats = [cases, recovered, deaths, todayDeaths];
  return (
    <section className="my-10 flex gap-1">
      {stats?.map((stat, index) => (
        <CardGlobal key={index} icon={cardLabels[index].icon} title={cardLabels[index].label} data={stat}/>
      ))}
      <CardGlobal icon={cardLabels[cardLabels.length-1].icon} title={cardLabels[cardLabels.length-1].label} data={198}/>
    </section>
  )
}

export default GlobalDataCards;
