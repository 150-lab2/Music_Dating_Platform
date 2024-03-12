"use client";
import { ButtonSignin } from "./components/ButtonSignIn/ButtonSignIn";
import { PrimaryButton } from "./components/PrimaryButton/PrimaryButton";
import { SignUpComponent } from "./components/SignUpComponent/SignUpComponent";
import "./style.css";
import Link from "next/link";
import React, { useState } from "react";

export default function Landing() {
  const [showSignInOverlay, setSignInShowOverlay] = useState(false);

  const handleSignInShowOverlay = () => setSignInShowOverlay(true);
  const handleSignInHideOverlay = () => setSignInShowOverlay(false);

  function SignInOverlayComponent() {
    return (
      <div
        style={{
          position: "fixed", // or 'absolute' if it should scroll with the page
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1000, // High z-index to ensure it is on top of other content
        }}
      >
        <div style={{ textAlign: "center", paddingTop: "20%" }}>
          <SignUpComponent onClose={handleSignInHideOverlay} text="Sign In"/>
        </div>
      </div>
    );
  }

  const [showSignUpOverlay, setSignUpShowOverlay] = useState(false);

  const handleSignUpShowOverlay = () => setSignUpShowOverlay(true);
  const handleSignUpHideOverlay = () => setSignUpShowOverlay(false);

  function SignUpOverlayComponent() {
    return (
      <div
        style={{
          position: "fixed", // or 'absolute' if it should scroll with the page
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1000, // High z-index to ensure it is on top of other content
        }}
      >
        <div style={{ textAlign: "center", paddingTop: "20%" }}>
          <SignUpComponent onClose={handleSignUpHideOverlay} text="Sign Up"/>
        </div>
      </div>
    );
  }

  return (
    <div className="landing">
      <div className="overlap-wrapper">
        {showSignInOverlay && <SignInOverlayComponent />}
        {showSignUpOverlay && <SignUpOverlayComponent />}
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <div className="rectangle" />
              <img className="img" alt="Vector" src="/vector-4.svg" />
              <img className="vector-2" alt="Vector" src="/vector-3.svg" />
              <div className="div" />
              <img className="frame" alt="Frame" src="/frame-1.svg" />
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-2">
              <div className="rectangle-2" />
              <button
                className="interactable"
                style={{ background: "none", border: "none", padding: 0 }}
                onClick={() => console.log("Image button clicked!")}
              >
                <img className="ellipse" alt="Ellipse" src="/ellipse-4.svg" />
                <img className="red" alt="Red" src="/red-304570-640-1@2x.png" />
              </button>
              <button
                className="interactable"
                style={{ background: "none", border: "none", padding: 0 }}
                onClick={() => console.log("Image button clicked!")}
              >
                <img
                  className="skip-to-start-icon"
                  alt="Skip to start icon"
                  src="/skip-to-start-icon-18-256-1@2x.png"
                />
              </button>
              <button
                className="interactable"
                style={{ background: "none", border: "none", padding: 0 }}
                onClick={() => console.log("Image button clicked!")}
              >
                <img
                  className="skip-to-start-icon-2"
                  alt="Skip to start icon"
                  src="/skip-to-start-icon-18-256-2@2x.png"
                />
              </button>
            </div>
          </div>
          <Link href="/">
            <div className="text-wrapper-2">cadence</div>
          </Link>
          <Link href="/">
            <img
              className="untitled-recovered"
              alt="Untitled recovered"
              src="/untitled-1-recovered-1@2x.png"
            />
          </Link>
          <button
            className="interactable"
            style={{ background: "none", border: "none", padding: 0 }}
            onClick={handleSignInShowOverlay}
          >
            <ButtonSignin
              className="button-signin-instance"
              vectorStroke="/vector-1--stroke-.svg"
            />
          </button>
          <p className="headline">Single and Ready to Jingle.</p>
          <button
            className="interactable"
            style={{ background: "none", border: "none", padding: 0 }}
            onClick={handleSignUpShowOverlay}
          >
            <PrimaryButton
              className="primary-button-instance"
              text="Sign Up"
              vector="/vector-1--stroke-.svg"
            />
          </button>
          <img className="vector-3" alt="Vector" src="/vector-1--stroke-.svg" />
        </div>
      </div>
    </div>
  );
}
