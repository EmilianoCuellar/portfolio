import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <section className="section pageHero">
        <div className="container">
          <div className="eyebrow">About</div>
          <h1 className="heading-lg">I build Web3 products that connect real-world systems to blockchain infrastructure.</h1>
          <p className="lead">
            I’m a blockchain engineer focused on building real-world Web3 products.

I’ve been developing the Dazed ecosystem — a custom blockchain powered by Proof of Product (PoP), designed to bring verifiable inventory, identity, and transactions on-chain for the cannabis industry.

My work combines smart contract development, product design, and user experience to turn complex systems into usable applications. I focus on building products that go beyond speculation and actually function in real-world environments.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container caseGrid">
          <div className="panel casePanel">
            <h3>How I think</h3>
            <p>
              I believe Web3 needs stronger product thinking.

Too many projects focus on hype, tokens, or surface-level UI. I focus on building systems that actually work — where ownership, verification, and real-world utility are clearly connected.

My goal is to bridge the gap between blockchain infrastructure and real-world adoption through better product design and execution.
            </p>
          </div>
          <div className="panel casePanel">
            <h3>Why the NFTs matter here</h3>
            <p>
             After building and launching Ganja Gang, I ran into a reality most Web3 projects avoid:

The technology worked — but the product didn’t.

There was no real usage, no clear reason for people to interact with it beyond minting, and no connection between the digital assets and anything happening in the real world.

That forced me to step back and rethink everything — not as an NFT project, but as a system.
            </p>
          </div>
          <div className="panel casePanel">
            <h3>Problem Framing</h3>
            <p>
              I started asking better questions:

What would make ownership actually useful?
How do you verify something real on-chain?
What would a blockchain product look like if it had to function inside a real business?

That’s where the direction shifted.
            </p>
          </div>
          <div className="panel casePanel">
            <h3>Product Mindset</h3>
            <p>
             This portfolio isn’t just a collection of screens.

It’s a breakdown of how I think about product — how complex systems should feel, how trust is communicated through design, and how Web3 can move beyond speculation into real-world use. 
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
