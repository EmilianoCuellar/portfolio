import Link from "next/link";
import Image from "next/image";
import WalletVisual from "./WalletVisual";

export default function Hero() {
  return (
    <section className="section">
      <div className="container grid-hero">
        <div className="panel heroLeft">
          <div className="heroTop">
            <div className="eyebrow">Product Designer × Blockchain Engineer × Web3 Builder</div>
            <h1 className="heading-xl">Building Web3 products that actually work in the real world.</h1>
            <p className="lead">
              I design and build wallet systems, NFT ecosystems, and on-chain product experiences focused on real usage—not speculation.
From smart contracts to UI, I focus on making Web3 feel usable, valuable, and scalable.
            </p>

            <div className="heroActions">
              <Link href="/work" className="btnPrimary">View Case Studies</Link>
              <Link href="/work/dazed-wallet" className="btnSecondary">See Dazed Wallet</Link>
            </div>
          </div>

          <div className="heroStats">
            <div className="statCard">
              <strong>3</strong>
              <span>Core product surfaces: wallet, tokenized assets, and privacy-first verification.</span>
            </div>
            <div className="statCard">
              <strong>5</strong>
              <span>Original Ganja Gang NFTs used as real visual proof throughout the product concepts.</span>
            </div>
            <div className="statCard">
              <strong>1</strong>
              <span>Founder-builder perspective across design, brand, smart contracts, and Web3 product strategy.</span>
            </div>
          </div>
        </div>

        <div className="heroRight">
          <div className="panel walletPreview">
            <div className="previewHead">
              <span className="previewLabel">Dazed Wallet visual</span>
              <div className="windowDots"><span/><span/><span/></div>
            </div>
            <WalletVisual />
          </div>

          <div className="heroMiniGrid">
            <div className="panel miniTile cardHover">
              
              <Image src="/images/ganja-gang/3.png" alt="Ganja Gang NFT" fill sizes="(max-width: 760px) 100vw, 25vw" />
            </div>
            <div className="panel miniTile cardHover">
              
              <Image src="/images/ganja-gang/5.png" alt="Ganja Gang NFT" fill sizes="(max-width: 760px) 100vw, 25vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
