import CardVirus from "../../components/tracker1/CardVirus";
import SelectCountry from "../../components/tracker1/SelectCountry";
import useGlobalData from "../../services/useGlobalData";

const Tracker1 = () => {
  const { data } = useGlobalData();

  if (data === null) {
    return <div>Loading...</div>;
  }

  const handleCountryChange = (country) => {
    alert(country);
  }

  const { cases, deaths, recovered, active, todayCases, todayDeaths, updated } = data;
  const updateDate = new Date(updated).toLocaleDateString("en-US", {month: 'long', day: 'numeric', year: 'numeric'});
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
    <article className="bg-gray-super-light p-5 ">
      <section className="top flex justify-between">
        <SelectCountry onChange={handleCountryChange}/>
        <p className="font-medium">Updated: {updateDate}</p>
      </section>
      <section className="cards grid grid-cols-2 gap-1 w-[65%]">
        {stats.map((stat, index) => (
          <CardVirus key={index} data={stat} color={colors[index]}/>
        ))}
      </section>
      <section></section>
    </article>
  );
};

export default Tracker1;
