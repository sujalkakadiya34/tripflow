import React, { useEffect, useRef } from "react";
import ContactCTA from "./ContactCTA";
import Form from "./Form";
import "./App.css";

function Contact() {
  const headerRef = useRef(null);
  const boxRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    boxRefs.current.forEach((box) => box && observer.observe(box));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <ContactCTA />
      <Form />

      <section className="trust-section">
        <div className="trust-container">
          <div className="trust-header" ref={headerRef}>
            <h2>
              Why Travelers <span>Trust TripFlow</span>
            </h2>
            <p>
              We design travel experiences with reliability, transparency,
              and technology that supports you at every step of your journey.
            </p>
          </div>

          <div className="trust-grid">
            {[
              {
                title: "Experience-Driven Planning",
                text: "Our platform focuses on real traveler needs, combining smart planning tools with curated travel insights.",
              },
              {
                title: "Technology You Can Rely On",
                text: "Built with modern, scalable systems to ensure smooth performance across all devices and destinations.",
              },
              {
                title: "Transparent & Secure",
                text: "Clear policies, secure data handling, and a user-first approach make TripFlow a platform you can trust.",
              },
              {
                title: "Support That Actually Helps",
                text: "Our support experience is designed to guide you clearly, efficiently, and without confusion.",
              },
            ].map((box, idx) => (
              <div
                key={idx}
                className="trust-box"
                ref={(el) => (boxRefs.current[idx] = el)}
              >
                <h3>{box.title}</h3>
                <p>{box.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
