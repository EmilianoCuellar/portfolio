import Link from "next/link";

const cards = [
  {
    title: "Dazed Wallet",
    href: "/work/dazed-wallet",
    body: "A custom wallet visual designed specifically for this portfolio to show token balances, NFT utility, and check-in flows without relying on a website screenshot.",
    tags: ["Wallet UX", "Token flows", "NFT ownership", "Mobile logic"]
  },
  {
    title: "Proof of Product (PoP)",
    href: "/work/marketplace",
    body: "A blockchain-backed inventory and verification system designed to track real-world cannabis products, reduce discrepancies, and bring operational transparency on-chain.",
    tags: ["Inventory tracking", "On-chain verification", "Supply chain logic", "Real-world utility"]
  },
  {
    title: "zk-ID Verification",
    href: "/work/zk-id",
    body: "A privacy-first verification concept that communicates trust and eligibility clearly while keeping the interface simple and productized.",
    tags: ["Privacy UX", "Verification", "Compliance", "Systems thinking"]
  }
];

export default function FeatureCards() {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionHeader">
          <div className="eyebrow">Selected work</div>
          <h2 className="heading-lg">Real products. Real systems. Not just concepts..</h2>
          <p className="lead">
            This work reflects how I think as a builder—combining product design, blockchain infrastructure, and real-world utility.
Every project here is designed with actual users, flows, and outcomes in mind.
          </p>
        </div>

        <div className="featureGrid">
          {cards.map((card) => (
            <Link key={card.title} href={card.href} className="panel panelPad featureCard cardHover">
              <div className="eyebrow">Case study</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <div className="tags">
                {card.tags.map((tag) => (
                  <span className="pill" key={tag}>{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
