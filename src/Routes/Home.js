import Hero from "../components/Hero";
import Navbar from "/src/components/Navbar";
import HomeImg from "../assets/12.jpg";
import Destination from "../components/Destination";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        HeroImg={HomeImg}
        title="Keep Calm And Travel On"
        text="Choose Your Favourite Destination"
        buttontext="Plan Trip"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Footer />
    </>
  );
}

export default Home;
