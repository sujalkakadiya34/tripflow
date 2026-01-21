import React from "react";
import "./App.css";

const destinations = [
  {
    title: "Paris Adventure",
    image: "./assets/Homeimage.jpg",
    hoverClass: "hover-zoom",
    positionClass: "pos-one",
  },
  {
    title: "Tropical Escape",
    image: "./assets/Homeimage.jpg",
    hoverClass: "hover-slide",
    positionClass: "pos-two",
  },
  {
    title: "Mountain Trekking",
    image: "./assets/Homeimage.jpg",
    hoverClass: "hover-tilt",
    positionClass: "pos-three",
  },
  {
    title: "City Explorer",
    image: "./assets/Homeimage.jpg",
    hoverClass: "hover-reveal",
    positionClass: "pos-four",
  },
];

const DestinationShowcase = () => {
  return (
    <>
    <section className="destination-showcase">
      <div className="destination-grid destination-grid-cross">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className={`destination-card destination-card-pro ${dest.hoverClass} ${dest.positionClass}`}
          >
            <img
              src={dest.image}
              alt={dest.title}
              className="destination-image"
            />

            <div className="destination-overlay">
              <h3 className="destination-title">{dest.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default DestinationShowcase;
