import Hero from "../components/Hero";
import Navbar from "/src/components/Navbar";
import ServiceImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" HeroImg={ServiceImg} title="Our Services" />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
