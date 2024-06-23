import Hero from "../../pages/home/sections/Hero";
import StaySection from "../../pages/home/sections/StaySection";
import Carousel from "../../pages/home/sections/Carousel";
import Faq from "../../pages/home/sections/Faq";
import MetricsSection from "../../pages/home/sections/MetricsSection";


const Home = () => {
  return (
    <div className="bg-dark-blue-2">
      <Hero/>
      <Carousel/>
      <StaySection/>
      <MetricsSection/>
      <Faq/>
    </div>
  );
};

export default Home;