import Hero from "../_components/Hero";
import Pricing from "../_components/Pricing";
import VideoShowcase from "../_components/VideoShowcase";
import Examples from "../_components/Examples";
import SatisfiedClients from "../_components/SatisfiedClients";

const Homepage = () => {
  return (
    <>
      <Hero />
      <SatisfiedClients />
      <VideoShowcase />
      <Examples />
      <Pricing />
    </>
  );
};

export default Homepage;
