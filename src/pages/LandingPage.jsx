import FeaturesSection from "../faetures/LandingPage/FeaturesSection";
import HeroSection from "../faetures/LandingPage/HeroSection";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
