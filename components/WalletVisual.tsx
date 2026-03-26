export default function WalletVisual() {
  return (
    <div className="walletCard">
      <div className="walletTop">
        <div className="walletBrand">
          <div className="walletLogo" />
          <div>
            <strong>Dazed Wallet</strong>
          </div>
        </div>
        <div className="statusPill">Connected</div>
      </div>

      <div className="balanceBlock">
        <span>Total balance</span>
        <strong>4,206.90 DZD</strong>
        <p>+12.4% · rewards from PoP-verified purchases</p>
      </div>

      <div className="quickActions">
        <div className="actionBtn">Send</div>
        <div className="actionBtn">Receive</div>
        <div className="actionBtn">Check in</div>
      </div>

      <div className="walletRows">
        <div className="assetRow">
          <div>
            <strong>$DZD</strong>
            <span>Gas + rewards token</span>
          </div>
          <div style={{ textAlign: "right" }}>
            <b>3,800</b><br />
            <span className="assetAccent-green">Staked / earning</span>
          </div>
        </div>

        <div className="assetRow">
          <div>
            <strong>Ganja Gang</strong>
            <span>NFTs · 8 shown</span>
          </div>
          <div style={{ textAlign: "right" }}>
            <b>x 4</b><br />
            <span className="assetAccent-pink">RWA-linked perks</span>
          </div>
        </div>

        <div className="assetRow">
          <div>
            <strong>zk-ID</strong>
            <span>Age / eligibility proofs</span>
          </div>
          <div style={{ textAlign: "right" }}>
            <b className="assetAccent-cyan">Cached · 24h</b><br />
            <span>No PII stored on-chain</span>
          </div>
        </div>

        <div className="assetRow" style={{ borderStyle: "dashed" }}>
          <div>
            <strong>Builder tools</strong>
            <span>SDK + WalletConnect support</span>
          </div>
          <div style={{ textAlign: "right" }}>
            <b>Coming soon</b><br />
            <span>Partner-ready stack</span>
          </div>
        </div>
      </div>
    </div>
  );
}
