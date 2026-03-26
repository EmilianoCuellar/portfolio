import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FeatureCards from "../components/FeatureCards";
import MarketplaceSection from "../components/MarketplaceSection";
import ZkSection from "../components/ZkSection";
import Contact from "../components/Contact";
import PopSection from "../components/PopSection"
import PalSection from "../components/PalSection";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <FeatureCards />
      <MarketplaceSection />
      <PopSection />
      <PalSection />
      <ZkSection />
      <Contact />
      <Footer />
    </>
  );
}
