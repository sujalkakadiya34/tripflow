import React from "react";
import "./App.css";
import { LuMapPin, LuGlobe, LuBriefcase } from "react-icons/lu";
import DestinationShowcase from "./DestinationShowcase";

const Home = () => {
  return (
    <main className="home">
      {/* HERO SECTION */}
      <section
        className="hero-section"
        style={{ backgroundImage: "url(/assets/Homeimage.jpg)" }}
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

      {/* DESTINATION SHOWCASE */}
      <DestinationShowcase />

      {/* CAPABILITIES SECTION */}
      <section className="capabilities-section">
        <div className="capabilities-header">
          <span className="capabilities-eyebrow">Why TripFlow</span>

          <h2 className="section-title">
            Built for <span className="highlight-teal">Modern Travelers</span>
          </h2>

          <p className="capabilities-subtitle">
            Powerful tools, thoughtful design, and reliable technology to help
            you plan journeys with confidence.
          </p>
        </div>

        <div className="capabilities-grid">
          <div className="capability-card">
            <div className="card-header">
              <div className="icon-box">
                <LuMapPin size={26} />
              </div>
              <h3>Smart Itinerary</h3>
            </div>
            <p>
              AI-powered planning to optimize routes, schedules, and travel flow
              with absolute precision.
            </p>
          </div>

          <div className="capability-card">
            <div className="card-header">
              <div className="icon-box">
                <LuGlobe size={26} />
              </div>
              <h3>Global Destinations</h3>
            </div>
            <p>
              Explore trusted destinations and curated experiences across the globe.
            </p>
          </div>

          <div className="capability-card">
            <div className="card-header">
              <div className="icon-box">
                <LuBriefcase size={26} />
              </div>
              <h3>Seamless Booking</h3>
            </div>
            <p>
              Unified booking for flights, stays, and experiences—fast and secure.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="engagement-section">
        <h2 className="section-title">Start Your Next Journey</h2>
        <p>
          Join thousands of travelers using TripFlow to plan confidently and
          travel smarter.
        </p>
        <button className="btn-primary btn-large">Create Your Trip</button>
      </section>
    </main>
  );
};

export default Home;
