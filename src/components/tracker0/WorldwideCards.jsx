import { API_BASE_URL_GLOBAL } from "../../config/urls";
import useApi from "../../services/useApi";
import CardWorldwide from "./CardWorldwide";

const WorldwideCards = () => {
  const data = useApi(API_BASE_URL_GLOBAL);

  if (!data) return null;

  const { cases, active, recovered, deaths, todayCases, todayRecovered, todayDeaths } = data;

  const stats = [
    {
      title: "Total Case",
      value: cases,
      className: "hover:border-red bg-[#fff2f2]",
      casesClassName: "text-red",
      extraCases: todayCases,
    },
    {
      title: "Active Case",
      value: active,
      className: "hover:border-orange bg-[#fff9f1]",
      casesClassName: "text-orange",
    },
    {
      title: "Recovered Case",
      value: recovered,
      className: "hover:border-green bg-[#edffec]",
      casesClassName: "text-green",
      extraCases: todayRecovered,
    },
    {
      title: "Deatch Case",
      value: deaths,
      className: "hover:border-darker-blue bg-[#eefbff]",
      casesClassName: "text-darker-blue",
      extraCases: todayDeaths,
    },
  ];

  return (
    <section className="font-medium flex flex-col gap-3">
      {stats?.map((stat) => (
        <CardWorldwide
          key={stat.title}
          title={stat.title}
          cases={stat.value}
          className={stat.className}
          casesClassName={stat.casesClassName}
          extraCases={stat.extraCases}
        />
      ))}
    </section>
  );
};

export default WorldwideCards;
