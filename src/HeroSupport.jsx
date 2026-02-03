import React from "react";
import "./App.css";

const HeroSupport = () => {
  return (
    <section className="hero-support">
      <div className="hero-support-container">
        {/* LEFT */}
        <div className="hero-support-content">
          <h1 className="hero-support-title">
            <span>Human support.</span>
            <span>Under 30 seconds.</span>
            <span>Every time.</span>
          </h1>

          <p className="hero-support-text">
            Handle in the app or contact travel experts in under 30 seconds
            through phone, chat, or email.
          </p>
        </div>

        {/* RIGHT */}
        <div className="hero-support-visual">
           <img
            src="./assets/support-ui-card.png"
            alt="Chat and ticket UI"
            className="hero-support-card-image"
          />
 
          <img
            src="./assets/support-person.avif"
            alt="Human support agent"
            className="hero-support-person"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSupport;
