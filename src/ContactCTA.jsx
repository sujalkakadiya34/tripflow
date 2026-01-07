import React from "react";
import "./Navbar.css"; // or your CSS file that contains contact-cta styles

function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="contact-cta-overlay"></div>

      <div className="contact-cta-content">
        <h2>Want to get your offers featured?</h2>

        <p>
          Get in touch with us to showcase your hotel, experience, tour or spa
          package on our website, and reach more visitors exploring this
          destination.
        </p>

        <button className="contact-cta-btn">
          Find out more
        </button>
      </div>
    </section>
  );
}

export default ContactCTA;
