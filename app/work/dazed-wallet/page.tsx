import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import WalletVisual from "../../../components/WalletVisual";
import Image from "next/image";

export default function DazedWalletPage() {
  return (
    <>
      <Nav />
      <section className="section pageHero">
        <div className="container">
          <div className="eyebrow">Case study</div>
          <h1 className="heading-lg">Dazed Wallet</h1>
          <p className="lead">
          A custom wallet interface I designed to show how the Dazed ecosystem works in a real product—combining balances, NFTs, and on-chain interactions in one place.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container splitGrid">
          <div className="panel panelPad">
            <div className="eyebrow">Concept goal</div>
            <h2 className="heading-lg">Bring balances, ownership, and real-world utility into one wallet experience.</h2>
            <p className="copy">
              I designed this wallet to unify how users interact with the Dazed ecosystem—combining $Dazed balances, Ganja Gang NFTs, and PoP / zk-ID functionality in a single interface.

Instead of splitting these interactions across multiple tools, the wallet brings everything together into one product surface, making on-chain activity feel more intuitive, connected, and usable in real-world scenarios.
            </p>
            <div className="tags" style={{ marginTop: 18 }}>
              <span className="pill">Non-custodial</span>
              <span className="pill">DZD focused</span>
              <span className="pill">PoP-linked</span>
              <span className="pill">zk-ID ready</span>
            </div>
          </div>

          <div className="panel panelPad">
            <WalletVisual />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container caseGrid">
          <div className="panel casePanel">
            <h3>Design decisions</h3>
            <ul>
              <li>The balance is the primary anchor, giving users immediate context around value and activity.</li>
              <li>Core actions—send, receive, and check-in—are prioritized to reinforce real-world usage over passive holding.</li>
              <li>NFTs are positioned as utility-bearing assets, integrated directly into the product flow rather than isolated as collectibles.</li>
              <li>The visual system balances a premium aesthetic with clarity, ensuring accessibility for both technical and non-technical users.</li>
            </ul>
          </div>
          <div className="panel casePanel">
            <h3>What this shows</h3>
            <p>
              I can take a Web3 ecosystem and translate it into a clear, usable product experience. This work focuses on turning complex blockchain interactions into interfaces that feel intuitive, connected, and ready for real-world use.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <div className="eyebrow">NFT utility inside the wallet</div>
            <h2 className="heading-lg">NFT ownership is integrated into the core product experience, allowing users to interact with their assets naturally instead of treating them as isolated collectibles.</h2>
          </div>
          <div className="marketGrid">
            {[1,2,3].map((n) => (
              <div className="panel marketItem" key={n}>
                <div className="marketImage">
                  <Image src={`/images/ganja-gang/${n}.png`} alt={`Ganja Gang ${n}`} width={500} height={500} />
                </div>
                <div className="marketBody">
                  <h4>Ganja Gang #{1000 + n}</h4>
                  <div className="marketMeta">
                    <span>Status</span>
                    <span>Wallet-held</span>
                  </div>
                  <div className="marketPrice">
                    <strong>Utility-linked</strong>
                    <span>Open</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
