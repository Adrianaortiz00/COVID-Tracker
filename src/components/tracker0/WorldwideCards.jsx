import useGlobalData from "../../services/useGlobalData";
import CardWorldwide from "./CardWorldwide";

const WorldwideCards = () => {
  const { data } = useGlobalData();

  if (!data) return null;

  const { cases, active, recovered, deaths } = data;

  console.log(data);
  const stats = [
    { title: "Total Case", value: cases, className: "hover:border-red bg-[#fff2f2]", casesClassName: "text-red" },
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
    },
    {
      title: "Deatch Case",
      value: deaths,
      className: "hover:border-darker-blue bg-[#eefbff]",
      casesClassName: "text-darker-blue",
    },
  ];

  return (
    <section className="font-medium flex flex-col gap-3 px-3">
      {stats?.map((stat) => (
        <CardWorldwide
          title={stat.title}
          cases={stat.value}
          className={stat.className}
          casesClassName={stat.casesClassName}
        />
      ))}
    </section>
  );
};

export default WorldwideCards;
