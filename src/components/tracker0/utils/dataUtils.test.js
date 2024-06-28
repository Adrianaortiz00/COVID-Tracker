import { expect, test } from "vitest";
import { generateStats, getTopCountries } from "./dataUtils";

test("generateStats creates the correct stats array", () => {
  const data = {
    cases: 1000,
    active: 800,
    recovered: 150,
    deaths: 50,
    todayCases: 100,
    todayRecovered: 20,
    todayDeaths: 5,
  };

  const expectedStats = [
    {
      title: "Total Case",
      value: 1000,
      className: "hover:border-red bg-[#fff2f2]",
      casesClassName: "text-red",
      extraCases: 100,
    },
    {
      title: "Active Case",
      value: 800,
      className: "hover:border-orange bg-[#fff9f1]",
      casesClassName: "text-orange",
    },
    {
      title: "Recovered Case",
      value: 150,
      className: "hover:border-green bg-[#edffec]",
      casesClassName: "text-green",
      extraCases: 20,
    },
    {
      title: "Deatch Case",
      value: 50,
      className: "hover:border-darker-blue bg-[#eefbff]",
      casesClassName: "text-darker-blue",
      extraCases: 5,
    },
  ];

  const stats = generateStats(data);

  expect(stats).toEqual(expectedStats);
});

test("getTopCountries returns the top 10 countries by cases", () => {
  const data = [
    { country: "Country1", cases: 100 },
    { country: "Country2", cases: 200 },
    { country: "Country3", cases: 300 },
    { country: "Country4", cases: 400 },
    { country: "Country5", cases: 500 },
    { country: "Country6", cases: 600 },
    { country: "Country7", cases: 700 },
    { country: "Country8", cases: 800 },
    { country: "Country9", cases: 900 },
    { country: "Country10", cases: 1000 },
    { country: "Country11", cases: 1100 },
  ];

  const topCountries = getTopCountries(data);

  expect(topCountries).toHaveLength(10);
  expect(topCountries[0].country).toBe("Country11");
  expect(topCountries[9].country).toBe("Country2");
});
