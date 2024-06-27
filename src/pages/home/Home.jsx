import Hero from "../home/sections/Hero";
import StaySection from "../home/sections/StaySection";
import Carousel from "../home/sections/Carousel";
import Faq from "../home/sections/Faq"
import MetricsSection from "../home/sections/MetricsSection";
import GetSimple from "./sections/GetSimple";
import Blog from "./sections/Blog";
import Footer from "../../components/general/Footer";


const Home = () => {
  return (
    <div className="bg-dark-blue-2">
      <Hero/>
      <Carousel/>
      <StaySection/>
      <MetricsSection/>
      <Faq/>
      <GetSimple/>
      <Blog/>
      <Footer/>
    </div>
  );
};

export default Home;