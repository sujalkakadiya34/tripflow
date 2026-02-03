import React from "react";
import "./App.css";

const CustomerTestimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-awards">
        <img src="./assets/awards.avif" alt="Awards" />
      </div>

      <h2 className="testimonial-heading">
        What Customers Say After Switching
      </h2>

      <div className="testimonial-card">
        {/* LEFT IMAGE */}
        <div className="testimonial-image">
          <img
            src="./assets/customer-portrait.avif"
            alt="Customer portrait"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="testimonial-content">
          <div className="company-row">
            <img
              src="./assets/health-logo2.avif"
              alt="Build Health International"
            />
            {/* <span>Build Health International</span> */}
          </div>

          <h3>
            “ITILITE rewired project level visibility at Build Health
            International”
          </h3>

          <p>
            We have 20+ simultaneous projects with non-profits. Tracking
            travel spend accurately at a project level is crucial for us,
            since we get reimbursed from our partners and through grants.
            Through ITILITE, project level reporting has been seamless and
            it has become my go-to tool for getting this information.
          </p>

          <div className="testimonial-author">
            <span className="author-line"></span>
            <div>
              <strong>Charlotte Dibb</strong>
              <p>Travel Coordinator at Build Health International</p>
            </div>
          </div>

<a href="https://iwetechs.com" className="case-study-link">
  <span className="case-study-text">Case study ↗</span>
</a>

        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonial;
