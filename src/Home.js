import React from "react";
import "./App.css";
import HeroSection from "./HeroSection";
import DestinationShowcase from "./DestinationShowcase";
import CapabilitiesSection from "./CapabilitiesSection";
import EngagementSection from "./EngagementSection";
import AiAgentsSection from "./AiAgentsSection";
import TrustSection from "./TrustSection";
import HeroSupport from "./HeroSupport";

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
        <HeroSupport />
      </main>
    </>
  );
};

export default Home;
