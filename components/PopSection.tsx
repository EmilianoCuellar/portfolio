import React from "react";

const flowSteps = [
  {
    title: "Product Created",
    desc: "Inventory enters the system with product details and source data."
  },
  {
    title: "Metrc ID Assigned",
    desc: "Each item is tied to a unique package identifier for compliance."
  },
  {
    title: "PoP Verified On-Chain",
    desc: "The product record is validated and anchored to the blockchain."
  },
  {
    title: "Inventory Updated",
    desc: "Stock movement, location, and status changes are tracked in real time."
  },
  {
    title: "Sale or Transfer Logged",
    desc: "Final transactions are recorded to preserve traceability and reduce discrepancies."
  }
];

const inventoryCards = [
  {
    name: "Blue Dream Cart",
    id: "PKG-240018-8831",
    status: "Verified",
    location: "Vault A",
    qty: "128 units"
  },
  {
    name: "Ganja Gang Pre-Roll",
    id: "PKG-240018-7742",
    status: "In Transit",
    location: "Retail Floor",
    qty: "64 units"
  },
  {
    name: "Live Resin Jar",
    id: "PKG-240018-5529",
    status: "Low Stock",
    location: "Storage B",
    qty: "12 units"
  }
];

export default function PopSection() {
  return (
    <section className="section">
      <div className="container splitGrid">
        <div className="panel panelPad">
          <div className="eyebrow">Proof of Product</div>
          <h2 className="heading-lg">
            A blockchain-backed inventory system built for real product movement.
          </h2>
          <p className="copy">
            Proof of Product (PoP) is a custom consensus model designed to connect
            physical cannabis inventory with on-chain verification. Instead of only
            validating transactions, the system validates the existence, movement,
            and status of real products across the supply chain.
          </p>
          <p className="copy">
            The goal is simple: reduce discrepancies, improve transparency, and
            create a product infrastructure that dispensaries can actually use in
            daily operations.
          </p>

          <div className="tags" style={{ marginTop: 18 }}>
            <span className="pill">Inventory tracking</span>
            <span className="pill">On-chain verification</span>
            <span className="pill">Dispensary operations</span>
            <span className="pill">Discrepancy reduction</span>
          </div>
        </div>

        <div className="panel panelPad">
          <div className="previewHead" style={{ marginBottom: 16 }}>
            <span className="previewLabel">PoP system flow</span>
            <div className="windowDots">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="popFlow">
            {flowSteps.map((step, index) => (
              <div className="popStep" key={step.title}>
                <div className="popStepIndex">0{index + 1}</div>
                <div className="popStepBody">
                  <strong>{step.title}</strong>
                  <span>{step.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: 18 }}>
        <div className="panel panelPad">
          <div className="previewHead" style={{ marginBottom: 18 }}>
            <span className="previewLabel">Inventory state preview</span>
            <div className="windowDots">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="popInventoryGrid">
            {inventoryCards.map((item) => (
              <div className="popInventoryCard" key={item.id}>
                <div className="popInventoryTop">
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.id}</p>
                  </div>
                  <span
                    className={
                      item.status === "Verified"
                        ? "popStatus popStatusGreen"
                        : item.status === "In Transit"
                        ? "popStatus popStatusBlue"
                        : "popStatus popStatusPink"
                    }
                  >
                    {item.status}
                  </span>
                </div>

                <div className="popMeta">
                  <div>
                    <span>Location</span>
                    <strong>{item.location}</strong>
                  </div>
                  <div>
                    <span>Quantity</span>
                    <strong>{item.qty}</strong>
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