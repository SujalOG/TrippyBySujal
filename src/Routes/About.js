import Hero from "../components/Hero";
import Navbar from "/src/components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" HeroImg={AboutImg} title="About Us" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
