import React, { useEffect, useRef } from "react";
import ContactCTA from "./ContactCTA";
import Form from "./Form";
import "./App.css";
import TrustSection from "./TrustSection";

function Contact() {

  return (
     <>
      <ContactCTA />
      <Form />
      <TrustSection />
     </>
  );
}

export default Contact;
