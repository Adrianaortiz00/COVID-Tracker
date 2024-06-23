import Hero from "../../components/home/Hero";
import StaySection from "../../components/home/StaySection";
import Carousel from "../../components/home/Carousel";
import Faq from "../../components/home/faq/Faq"
import MetricsSection from "../../components/home/MetricsSection";


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