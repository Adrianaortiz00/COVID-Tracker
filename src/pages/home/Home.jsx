import Hero from "../../components/home/Hero";
import StaySection from "../../components/home/StaySection";
<<<<<<< HEAD
import Carousel from "../../components/home/Carousel";
=======
import Faq from "../../components/home/faq/Faq"
import MetricsSection from "../../components/home/MetricsSection";

>>>>>>> c355820738c3eb0f8f9fff81a6ac336614fe2d68

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