import Image from "next/image";

const items = [
  { id: 1, price: "0.09 ETH", owner: "0x8A2...F19" },
  { id: 2, price: "0.11 ETH", owner: "0x6F4...D44" },
  { id: 3, price: "0.08 ETH", owner: "0x91C...B72" },
  { id: 4, price: "0.15 ETH", owner: "0x3BD...0F2" },
  { id: 5, price: "0.10 ETH", owner: "0x7E1...293" }
];

export default function MarketplaceSection() {
  return (
    <section className="section">
      <div className="container splitGrid">
        <div className="panel panelPad">
          <div className="eyebrow">Proof of Product (PoP) System</div>
          <h2 className="heading-lg">A blockchain system built to track real-world inventory on-chain.</h2>
          <p className="copy">
            Proof of Product (PoP) is a custom consensus layer designed to connect physical cannabis inventory with on-chain verification.

Each product is tied to a unique identifier, allowing dispensaries to track inventory, validate authenticity, and reduce discrepancies in real time.

This system turns blockchain from speculation into infrastructure—where products, not just tokens, are verified and managed.
          </p>
          <div className="tags" style={{ marginTop: 18 }}>
            <span className="pill">Open item states</span>
            <span className="pill">Collection identity</span>
            <span className="pill">Verified presentation</span>
            <span className="pill">Purchase confidence</span>
          </div>
        </div>

        <div className="panel marketWrap">
          <div className="filterBar">
            <div className="filters">
              <span className="filterChip">Trending</span>
              <span className="filterChip">Buy now</span>
              <span className="filterChip">Verified</span>
              <span className="filterChip">Newest</span>
            </div>
            <span className="filterChip">Collection: Ganja Gang</span>
          </div>

          <div className="marketGrid">
            {items.map((item) => (
              <div className="panel marketItem" key={item.id}>
                <div className="marketImage">
                  <Image src={`/images/ganja-gang/${item.id}.png`} alt={`Ganja Gang #${item.id}`} width={500} height={500} />
                </div>
                <div className="marketBody">
                  <h4>Ganja Gang #{1000 + item.id}</h4>
                  <div className="marketMeta">
                    <span>Owner</span>
                    <span>{item.owner}</span>
                  </div>
                  <div className="marketPrice">
                    <strong>{item.price}</strong>
                    <span>View item</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
