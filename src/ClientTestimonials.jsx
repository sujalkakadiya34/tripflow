import React from "react";
import "./App.css";

const clientTestimonialsData = [
  {
    logo: "./assets/health-logo2.avif",
    quote:
      "One of my favorite things about ITILITE is its ease of adaptability. Being a mobile international company, the ability to upload and approve in real time is immeasurable. The interface is user friendly hence employees need minimal training.",
    avatar: "./assets/ClientTestimonials-person1.avif",
    name: "Marjory Lake",
    role: "Payroll and Benefits Director",
  },
  {
    logo: "./assets/health-logo3.avif",
    quote:
      "ITILITE's cards program has delivered substantial cost savings – we've seen around $5,000 in cashback in the first quarter! Plus, their platform streamlines our reporting, making everything transparent and centralized.",
    avatar: "./assets/ClientTestimonials-person3.avif",
    name: "Tara Foltz",
    role: "Vice President – Administrative Operations",
  },
  {
    logo: "./assets/health-logo2.avif",
    quote:
      "Support is a big plus. My travelers get connected with ITILITE support within 10 seconds, and they take care of everything. This one time there was a weather-related cancellation but I didn't have to stop what I was doing.",
    avatar: "./assets/ClientTestimonials-person2.avif",
    name: "Donna Mell",
    role: "EA to CEO at Exactera",
  },
];

const ClientTestimonials = () => {
  return (
    <section className="ct-wrapper">
      <div className="ct-grid">
        {clientTestimonialsData.map((item, index) => (
          <article className="ct-card" key={index}>
            <div className="ct-logo">
              <img src={item.logo} alt="Company logo" />
            </div>

            <p className="ct-quote">“{item.quote}”</p>

            <div className="ct-author">
              <div className="ct-avatar">
                <img src={item.avatar} alt={item.name} />
              </div>
              <div className="ct-author-text">
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ClientTestimonials;
