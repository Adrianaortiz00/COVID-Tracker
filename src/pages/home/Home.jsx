import Hero from "../../components/home/Hero";
import CardSponsors from "../../components/home/CardSponsors";
import StaySection from "../../components/home/StaySection";
import Faq from "../../components/home/faq/Faq"

const Home = () => {
  return (
    <div className="bg-dark-blue-2">
      <Hero/>
      <StaySection/>
      <CardSponsors/>
      <Faq/>
    </div>
  );
};

export default Home;