import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import MarketplaceSection from "../../../components/MarketplaceSection";

export default function MarketplacePage() {
  return (
    <>
      <Nav />
      <section className="section pageHero">
        <div className="container">
          <div className="eyebrow">Case study</div>
          <h1 className="heading-lg">Proof of Product</h1>
          <p className="lead">
            I built Proof of Product (PoP) to connect Ganja Gang NFTs with real-world cannabis inventory on the Dazed Blockchain—creating a system where products, not just tokens, are verified, tracked, and managed on-chain.
          </p>
        </div>
      </section>
      <MarketplaceSection />
      
      <Footer />
    </>
  );
}
