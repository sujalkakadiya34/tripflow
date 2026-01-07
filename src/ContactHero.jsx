import React from "react";

function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-overlay"></div>

      <div className="contact-content">
        <h1>CONTACT US</h1>

        <div className="breadcrumb">
          <span>Home</span>
          <span className="slash">/</span>
          <span className="active">Contact</span>
        </div>

        <button className="contact-btn">
          Get In Touch
          <span className="btn-effect"></span>
        </button>
      </div>
    </section>
  );
}

export default ContactHero;
