import React from "react";
import { LuMapPin, LuGlobe, LuBriefcase } from "react-icons/lu";

const CapabilitiesSection = () => {
  return (
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
            AI-powered planning to optimize routes, schedules, and travel
            flow with absolute precision.
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
  );
};

export default CapabilitiesSection;
