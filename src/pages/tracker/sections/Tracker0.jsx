import Top10Countries from "../../../components/tracker0/Top10Countries";
import WorldwideCards from "../../../components/tracker0/WorldwideCards";

const Tracker0 = () => {
  return (
    <div className="w-[330px]">
      <h1 className="font-bold text-2xl mb-5 mt-7 text-center">COVID-19 Tracker</h1>
      <WorldwideCards />
      <Top10Countries />
    </div>
  );
};

export default Tracker0;
