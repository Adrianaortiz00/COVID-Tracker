import Hero from "../../components/home/Hero";
import CardSponsors from "../../components/home/CardSponsors";
import StaySection from "../../components/home/StaySection";

const Home = () => {
  return (
    <div>
      <Hero/>
      <StaySection/>
      <CardSponsors/>
      <Carousel/>
    </div>
  );
};

export default Home;
