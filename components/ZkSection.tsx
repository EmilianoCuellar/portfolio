export default function ZkSection() {
  return (
    <section className="section">
      <div className="container splitGrid">
        <div className="panel zkCard">
          <div className="eyebrow">zk-ID verification</div>
          <h2 className="heading-lg">Privacy-first product communication instead of technical overload.</h2>
          <p className="copy">
            The point of this concept is not to show cryptography diagrams. It is to demonstrate that I can translate an advanced system
            into an interface that communicates trust, eligibility, and low-friction next steps.
          </p>

          <div className="zkGrid">
            <div className="zkInfo">
              <strong>Minimal data exposure</strong>
              <span>Age or eligibility can be confirmed without turning the screen into a raw identity dump.</span>
            </div>
            <div className="zkInfo">
              <strong>Clear outcome language</strong>
              <span>Users should understand what was verified and what they can do next immediately.</span>
            </div>
            <div className="zkInfo">
              <strong>Dispensary-ready direction</strong>
              <span>Built with compliant check-ins and regulated purchases in mind.</span>
            </div>
            <div className="zkInfo">
              <strong>Trust as product feel</strong>
              <span>Security should feel calm and intentional rather than intimidating.</span>
            </div>
          </div>
        </div>

        <div className="panel zkCard">
          <div className="previewHead" style={{ marginBottom: 16 }}>
            <span className="previewLabel">Verification surface</span>
            <div className="windowDots"><span/><span/><span/></div>
          </div>
          <div className="scanSurface">
            <div className="scanFrame" />
          </div>
          <div className="zkGrid">
            <div className="zkInfo">
              <strong>Proof status</strong>
              <span>Verified over zero-knowledge flow</span>
            </div>
            <div className="zkInfo">
              <strong>Raw data shown</strong>
              <span>No primary UI exposure</span>
            </div>
            <div className="zkInfo">
              <strong>Decision output</strong>
              <span>Eligible for entry or purchase</span>
            </div>
            <div className="zkInfo">
              <strong>System intent</strong>
              <span>Compliance with user dignity preserved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
