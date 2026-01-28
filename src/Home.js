import React from "react";
import "./App.css";
import HeroSection from "./HeroSection";
import DestinationShowcase from "./DestinationShowcase";
import CapabilitiesSection from "./CapabilitiesSection";
import EngagementSection from "./EngagementSection";
import AiAgentsSection from "./AiAgentsSection";
import TrustSection from "./TrustSection";

const Home = () => {
  return (
    <>
      <main className="home">
        <HeroSection />
        <DestinationShowcase />
        <CapabilitiesSection />
        <EngagementSection />
        <AiAgentsSection />
        <TrustSection />
      </main>
    </>
  );
};

export default Home;
