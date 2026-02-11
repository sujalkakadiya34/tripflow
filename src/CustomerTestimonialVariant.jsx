import React from "react";
import "./App.css";

const CustomerTestimonialVariant = () => {
  return (
    <section className="ctv-section">

      <div className="ctv-card ctv-reverse">

        {/* LEFT CONTENT */}
        <div className="ctv-content">
          <div className="ctv-company-row">
            <img
              src="./assets/health-logo2.avif"
              alt="Build Health International"
            />
          </div>

          <h3 className="ctv-title">
            “ITILITE rewired Education travel at Herzing”
          </h3>

            <p className="ctv-text">
            “We were dreading the transition. But onboarding was a breeze. We got 500+ travelers up and running in under 2 weeks — with zero disruption to travel or finance operations.”
            </p>


          <div className="ctv-author">
            <span className="ctv-author-line"></span>
            <div>
              <strong>Joshua Dutton-de Beer</strong>
              <p>EA to the COO</p>
            </div>
          </div>

            <a href="https://iwetechs.com" className="ctv-link">
            <span className="ctv-link-text">
                Listen to podcast <span className="ctv-link-arrow">↗</span>
            </span>
            </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="ctv-image">
          <img
            src="./assets/customer-portrait.avif"
            alt="Customer portrait"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonialVariant;
