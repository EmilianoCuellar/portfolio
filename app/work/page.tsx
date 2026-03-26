import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import FeatureCards from "../../components/FeatureCards";

export default function WorkPage() {
  return (
    <>
      <Nav />
      <section className="section pageHero">
        <div className="container">
          <div className="eyebrow">Work</div>
          <h1 className="heading-lg">Three focused case studies that show how I approach real Web3 product design.</h1>
          <p className="lead">
            Each case study emphasizes product realism: ownership and action flows in a wallet,
            trust and presentation in a marketplace, and calm communication in verification.
          </p>
        </div>
      </section>
      <FeatureCards />
      <Footer />
    </>
  );
}
