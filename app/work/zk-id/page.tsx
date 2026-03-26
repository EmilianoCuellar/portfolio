import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import ZkSection from "../../../components/ZkSection";
import ZkAnimation from "../../../components/ZkAnimation";

export default function ZkIdPage() {
  return (
    <>
      <Nav />
      <section className="section pageHero">
        <div className="container">
          <div className="eyebrow">Case study</div>
          <h1 className="heading-lg">Privacy-first identity that feels usable in the real world.</h1>
          <p className="lead">
            I designed zk-ID to verify age and eligibility without exposing unnecessary personal data. 
Instead of sharing raw identity details, the user generates a zero-knowledge proof that confirms they meet the requirement—nothing more.

The goal is to make verification feel simple, trustworthy, and fast enough for real-world check-ins, purchases, and regulated access flows.
          </p>
        </div>
      </section>
     <ZkAnimation />
      <section className="section">
        <div className="container caseGrid">
          <div className="panel casePanel">
            <h3>Minimal data exposure</h3>
            <p>
              Age and eligibility can be verified without turning the interface into a raw identity handoff.
            </p>
          </div>
          <div className="panel casePanel">
            <h3>Clear outcome</h3>
            <p>
              Users immediately understand whether they are approved and what actions are now available.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
