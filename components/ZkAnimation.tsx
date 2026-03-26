"use client";

import { useEffect, useMemo, useState } from "react";

type Step = "idle" | "scanning" | "proving" | "verified";

export default function ZkIdInteractive() {
  const [step, setStep] = useState<Step>("idle");
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;

    setStep("scanning");
    const t1 = setTimeout(() => setStep("proving"), 1600);
    const t2 = setTimeout(() => setStep("verified"), 3400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [autoPlay]);

  const progress = useMemo(() => {
    switch (step) {
      case "idle":
        return 0;
      case "scanning":
        return 38;
      case "proving":
        return 74;
      case "verified":
        return 100;
    }
  }, [step]);

  const resetFlow = () => {
    setAutoPlay(false);
    setStep("idle");
  };

  const startFlow = () => {
    setAutoPlay(false);
    setStep("idle");
    setTimeout(() => setAutoPlay(true), 50);
  };

  return (
    <div className="zkApp panel">
      <div className="zkAppTop">
        <div>
          <div className="previewLabel">zk-ID app preview</div>
          <h3 className="zkAppTitle">Instant age verification</h3>
        </div>
        <div className={`zkStatus ${step === "verified" ? "isVerified" : ""}`}>
          {step === "idle" && "Ready"}
          {step === "scanning" && "Scanning"}
          {step === "proving" && "Generating proof"}
          {step === "verified" && "Verified 21+"}
        </div>
      </div>

      <div className="zkPhone">
        <div className="zkPhoneInner">
          <div className="zkHeaderRow">
            <div>
              <div className="zkScreenLabel">Dazed zk-ID</div>
              <div className="zkScreenSub">Private age and eligibility check</div>
            </div>
            <div className="zkLiveDot" />
          </div>

          <div className="zkProgressWrap">
            <div className="zkProgressBar">
              <div
                className="zkProgressFill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="zkProgressText">{progress}% complete</div>
          </div>

          <div className="zkMainCard">
            {step === "idle" && (
              <div className="zkState">
                <div className="zkIconCircle">ID</div>
                <h4>Verify age with zero-knowledge proof</h4>
                <p>
                  Confirm eligibility without exposing your full identity or
                  storing raw personal data on-chain.
                </p>

                <div className="zkActionRow">
                  <button className="zkPrimaryBtn" onClick={startFlow}>
                    Verify age
                  </button>
                  <button className="zkGhostBtn">How it works</button>
                </div>
              </div>
            )}

            {step === "scanning" && (
              <div className="zkState">
                <div className="zkScanArea">
                  <div className="zkScanFrame">
                    <div className="zkScanLine" />
                  </div>
                </div>
                <h4>Scanning credential</h4>
                <p>
                  Reading the proof request and preparing a privacy-preserving
                  verification flow.
                </p>
              </div>
            )}

            {step === "proving" && (
              <div className="zkState">
                <div className="zkProofStack">
                  <div className="zkProofNode active">Credential</div>
                  <div className="zkProofArrow" />
                  <div className="zkProofNode active">zk-Proof</div>
                  <div className="zkProofArrow" />
                  <div className="zkProofNode">Verifier</div>
                </div>
                <h4>Generating and validating proof</h4>
                <p>
                  The system confirms the user meets the requirement without
                  revealing unnecessary identity details.
                </p>
              </div>
            )}

            {step === "verified" && (
              <div className="zkState">
                <div className="zkSuccessBadge">Verified • Age 21+</div>

                <div className="zkVerifiedGrid">
                  <div className="zkVerifiedTile">
                    <span>Proof status</span>
                    <strong>Approved</strong>
                  </div>
                  <div className="zkVerifiedTile">
                    <span>Data exposure</span>
                    <strong>Minimal</strong>
                  </div>
                  <div className="zkVerifiedTile">
                    <span>Validity</span>
                    <strong>24 hours</strong>
                  </div>
                  <div className="zkVerifiedTile">
                    <span>Use case</span>
                    <strong>Check-in ready</strong>
                  </div>
                </div>

                <div className="zkActionRow">
                  <button className="zkPrimaryBtn">Check in</button>
                  <button className="zkGhostBtn">Continue</button>
                </div>
              </div>
            )}
          </div>

          <div className="zkBottomInfo">
            <div className={`zkMiniInfo ${step !== "idle" ? "active" : ""}`}>
              <strong>Private by default</strong>
              <span>No raw identity shown in the primary flow</span>
            </div>

            <div className={`zkMiniInfo ${step === "verified" ? "active" : ""}`}>
              <strong>Real-world ready</strong>
              <span>Built for dispensary check-ins and regulated access</span>
            </div>
          </div>
        </div>
      </div>

      <div className="zkFlowNotes">
        <div className={`zkNote ${step === "idle" ? "active" : ""}`}>
          <strong>1. User action</strong>
          <span>User starts verification from a simple app screen.</span>
        </div>
        <div className={`zkNote ${step === "scanning" ? "active" : ""}`}>
          <strong>2. Proof request</strong>
          <span>The app reads the request and prepares the credential check.</span>
        </div>
        <div className={`zkNote ${step === "proving" ? "active" : ""}`}>
          <strong>3. zk verification</strong>
          <span>Eligibility is confirmed without exposing unnecessary data.</span>
        </div>
        <div className={`zkNote ${step === "verified" ? "active" : ""}`}>
          <strong>4. Access unlocked</strong>
          <span>The user can move forward with check-in or purchase.</span>
        </div>
      </div>

      <div className="zkFooterActions">
        <button className="zkGhostBtn" onClick={resetFlow}>
          Reset
        </button>
        <button className="zkPrimaryBtn" onClick={startFlow}>
          Replay flow
        </button>
      </div>
    </div>
  );
}