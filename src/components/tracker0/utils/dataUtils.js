export const generateStats = (data) => {
  const { cases, active, recovered, deaths, todayCases, todayRecovered, todayDeaths } = data;

  return [
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
};

export const getTopCountries = (data) => {
  return data.sort((a, b) => b.cases - a.cases).slice(0, 10);
};
