import React from "react";
import "./App.css";

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: "url(./assets/Homeimage.jpg)" }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Explore <span className="highlight-blue">Destinations</span>
          <br />
          Plan Your <span className="highlight-teal">Journey</span>
        </h1>

        <p className="hero-subtext">
          Premium travel planning platform built for modern explorers.
          Smart tools. Seamless journeys. Confident experiences.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">View Destinations</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
