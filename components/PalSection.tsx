"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const traits = [
  {
    label: "Product Type",
    value: "Pre-Roll",
    detail:
      "This PAL is tied to a dispensary pre-roll product, giving the asset a direct relationship to a real item rather than existing only as a collectible."
  },
  {
    label: "Brand",
    value: "Ganja Gang",
    detail:
      "The brand layer connects the asset to the broader Ganja Gang identity, unifying collectible ownership with product recognition and ecosystem utility."
  },
  {
    label: "Strain",
    value: "Hybrid",
    detail:
      "Strain information adds real product context and supports categorization, verification, and future product-specific utility."
  },
  {
    label: "Batch",
    value: "GG-0420",
    detail:
      "The batch reference connects this PAL to a specific product grouping, supporting traceability and product-level verification."
  },
  {
    label: "PoP",
    value: "Verified",
    detail:
      "PoP verification confirms that this product has been validated through the Proof of Product system and linked to on-chain inventory logic."
  },
  {
    label: "Inventory",
    value: "Tracked",
    detail:
      "This asset is connected to inventory state, helping support transparent movement and discrepancy reduction across the supply chain."
  },
  {
    label: "Eligibility",
    value: "21+ Required",
    detail:
      "Eligibility requirements can be enforced through zk-ID, allowing age-gated access without exposing raw identity details."
  },
  {
    label: "Utility",
    value: "PAL Active",
    detail:
      "This asset is part of a broader product system, connecting ownership to verification, utility, and real-world blockchain interaction."
  }
];

export default function PalMarketplacePanel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTrait = useMemo(() => traits[activeIndex], [activeIndex]);

  return (
    <section className="section">
      <div className="container splitGrid">
        <div className="panel panelPad">
          <div className="eyebrow">PAL metadata preview</div>
          <h2 className="heading-lg">Product metadata built on NFT logic.</h2>
          <p className="copy">
            This PAL example shows how a digital asset can evolve beyond collectibility
            and become part of a real product system. Here, a Ganja Gang Pre-Roll is
            represented with trait-style metadata tied to verification, inventory, and utility.
          </p>
          <p className="copy">
            The goal is to make PALs feel familiar to NFT-native users while showing
            how they function inside the Dazed ecosystem as product-linked assets.
          </p>

          <div className="tags" style={{ marginTop: 18 }}>
            <span className="pill">NFT-native structure</span>
            <span className="pill">Product-linked metadata</span>
            <span className="pill">PoP verified</span>
            <span className="pill">Wallet ready</span>
          </div>
        </div>

        <div className="panel panelPad">
          <div className="marketDetailShell">
            <div className="marketDetailTop">
              <div>
                <div className="marketCollection">Ganja Gang PAL</div>
                <h3 className="marketAssetTitle">Pre-Roll PAL #1002</h3>
              </div>

              <div className="marketTopBadges">
                <span className="marketBadge verified">Authenticated</span>
                <span className="marketBadge">Dazed Blockchain</span>
              </div>
            </div>

            <div className="marketDetailGrid">
              <div className="marketAssetPanel">
                <div className="marketAssetImageWrap">
                  <Image
                    src="/images/ganja-gang/2.png"
                    alt="Ganja Gang Pre-Roll PAL"
                    width={800}
                    height={800}
                  />
                </div>

                <div className="marketAssetInfo">
                  <div className="marketMiniStat">
                    <span>Product link</span>
                    <strong>Ganja Gang Pre-Roll</strong>
                  </div>
                  <div className="marketMiniStat">
                    <span>Status</span>
                    <strong>PoP Verified</strong>
                  </div>
                  <div className="marketMiniStat">
                    <span>Utility</span>
                    <strong>PAL Active</strong>
                  </div>
                </div>
              </div>

              <div className="marketMetaPanel">
                <div className="marketMetaHeader">
                  <span className="previewLabel">Metadata / Traits</span>
                  <span className="marketMetaSub">Click to inspect</span>
                </div>

                <div className="marketTraitList">
                  {traits.map((trait, index) => (
                    <button
                      key={trait.label}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`marketTraitCard ${activeIndex === index ? "isActive" : ""}`}
                    >
                      <span>{trait.label}</span>
                      <strong>{trait.value}</strong>
                    </button>
                  ))}
                </div>

                <div className="marketTraitDetail">
                  <div className="marketTraitDetailTop">
                    <div>
                      <span className="marketDetailLabel">Selected trait</span>
                      <h4>{activeTrait.label}</h4>
                    </div>
                    <span className="marketValuePill">{activeTrait.value}</span>
                  </div>

                  <p>{activeTrait.detail}</p>
                </div>
              </div>
            </div>

            <div className="marketActionBar">
              <button className="marketPrimaryAction">View PAL</button>
              <button className="marketSecondaryAction">Open in Wallet</button>
              <button className="marketSecondaryAction">View PoP Status</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}