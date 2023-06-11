import Hero from "../components/Hero";
import Navbar from "/src/components/Navbar";
import ContactImg from "../assets/10.jpg";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" HeroImg={ContactImg} title="Contact Us" />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Contact;
