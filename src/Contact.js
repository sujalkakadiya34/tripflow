import React from "react";
import ContactCTA from "./ContactCTA";
import Form from "./Form";

function Contact() {
  return (
    <div>
      <ContactCTA />
      <Form />
      <section style={{ padding: "3rem 1rem", textAlign: "center", color: "#fff", backgroundColor: "#222" }}>
        <h2>Contact Details</h2>
        <p>Email: support@tripflow.com</p>
        <p>Phone: +91 12345 67890</p>
        <p>Address: 123 TripFlow Street, India</p>
      </section>
    </div>
  );
}

export default Contact;
