"use client";
import { ButtonSignin } from "./components/ButtonSignIn/ButtonSignIn";
import { PrimaryButton } from "./components/PrimaryButton/PrimaryButton";
import "./style.css";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="landing">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <div className="rectangle" />
              <img
                className="img"
                alt="Vector"
                src="/vector-4.svg"
              />
              <img
                className="vector-2"
                alt="Vector"
                src="/vector-3.svg"
              />
              <div className="div" />
              <img
                className="frame"
                alt="Frame"
                src="/frame-1.svg"
              />
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
                <img
                  className="ellipse"
                  alt="Ellipse"
                  src="/ellipse-4.svg"
                />
                <img
                  className="red"
                  alt="Red"
                  src="/red-304570-640-1@2x.png"
                />
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
          <ButtonSignin
            className="button-signin-instance"
            vectorStroke="/vector-1--stroke-.svg"
          />
          <p className="headline">Single and Ready to Jingle.</p>
          <PrimaryButton
            className="primary-button-instance"
            text="Sign Up"
            vector="/vector-1--stroke-.svg"
          />
          <img
            className="vector-3"
            alt="Vector"
            src="/vector-1--stroke-.svg"
          />
        </div>
      </div>
    </div>
  );
}
