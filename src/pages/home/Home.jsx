import Hero from "../home/sections/Hero";
import StaySection from "../home/sections/StaySection";
import Carousel from "../home/sections/Carousel";
import Faq from "../home/sections/Faq"
import MetricsSection from "../home/sections/MetricsSection";
import GetSimple from "./sections/GetSimple";
import Footer from "./sections/Footer";


const Home = () => {
  return (
    <div className="bg-dark-blue-2">
      <Hero/>
      <Carousel/>
      <StaySection/>
      <MetricsSection/>
      <Faq/>
      <GetSimple/>
      <Footer/>
    </div>
  );
};

export default Home;