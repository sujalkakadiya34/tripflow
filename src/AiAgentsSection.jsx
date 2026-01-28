import React from "react";
import "./App.css";

const agents = [
  {
    title: "Iris — Your AI travel analyst",
    tag: "AI TRAVEL ANALYST",
    image: "./assets/Homeimage.jpg",
    description:
      "We benchmark your travel spend, quantify missed savings, and recommend fixes. You just decide yes or no.",
  },
  {
    title: "Atlas — Spend Intelligence",
    tag: "AI SPEND ENGINE",
    image: "./assets/Homeimage.jpg",
    description:
      "Track leakage, out-of-policy bookings, and missed opportunities automatically across all trips.",
  },
  {
    title: "Nova — Policy Guardian",
    tag: "AI POLICY ENFORCER",
    image: "./assets/Homeimage.jpg",
    description:
      "Ensure every booking follows company policy without slowing employees down.",
  },
];

const AiAgentsSection = () => {
  return (
    <section className="ai-section">

      {/* ===== NEW CAPSULE HEADER ===== */}
      <div className="ai-capsule">
        <div className="ai-capsule-inner">
          <div className="ai-capsule-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L19 6V14
                   C19 17.3 15.9 20.4 12 22
                   C8.1 20.4 5 17.3 5 14V6L12 2Z"
                stroke="#0676be"
                strokeWidth="1.8"
              />
            </svg>
          </div>

          <div className="ai-capsule-text">
            <span>AI AGENTS</span>
            <h2>Putting AI Agents on ITILITE to work</h2>
          </div>
        </div>
      </div>

      {/* ===== CARD SECTION (UNCHANGED) ===== */}
      <div className="ai-container">
        {agents.map((item, index) => (
          <div
            className={`ai-card ${index % 2 !== 0 ? "reverse" : ""}`}
            key={index}
          >
            <div className="ai-image-wrap">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="ai-content">
              <span className="ai-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p className="ai-quote">{item.description}</p>
              <a href="iwetechs.com" className="ai-link">
                Explore →
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default AiAgentsSection;
