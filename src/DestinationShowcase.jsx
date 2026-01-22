import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const destinations = [
  { title: "Paris Adventure", image: "./assets/Homeimage.jpg", hoverClass: "hover-zoom", positionClass: "pos-one" },
  { title: "Tropical Escape", image: "./assets/Homeimage.jpg", hoverClass: "hover-slide", positionClass: "pos-two" },
  { title: "Mountain Trekking", image: "./assets/Homeimage.jpg", hoverClass: "hover-tilt", positionClass: "pos-three" },
  { title: "City Explorer", image: "./assets/Homeimage.jpg", hoverClass: "hover-reveal", positionClass: "pos-four" },
];

const useViewport = () => {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return width;
};

const DestinationShowcase = () => {
  const viewportWidth = useViewport();
  const isDesktop = viewportWidth >= 1025;
  const isTablet = viewportWidth >= 600 && viewportWidth < 1025;
  const sliderRef = useRef(null);
  const pageIndex = useRef(0);
  const intervalRef = useRef(null);

  // Split into pages of 2 cards each for loop
  const pages = [];
  for (let i = 0; i < destinations.length; i += 2) {
    pages.push(destinations.slice(i, i + 2));
  }
  const loopPages = [...pages, ...pages];

  useEffect(() => {
    if (isDesktop || !sliderRef.current) return; // Only for mobile/tablet

    const container = sliderRef.current;
    const totalPages = pages.length;

    const updateWidth = () => {
      if (container) container.scrollLeft = pageIndex.current * container.offsetWidth;
    };

    window.addEventListener("resize", updateWidth);

    intervalRef.current = setInterval(() => {
      if (!container) return;
      pageIndex.current += 1;

      container.scrollTo({
        left: pageIndex.current * container.offsetWidth,
        behavior: "smooth",
      });

      if (pageIndex.current >= totalPages) {
        // Reset without glitch
        setTimeout(() => {
          container.scrollLeft = 0;
          pageIndex.current = 0;
        }, 300); // slight delay to allow smooth transition
      }
    }, 2500);

    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener("resize", updateWidth);
    };
  }, [isDesktop, pages.length]);

  return (
    <section className="destination-showcase">
      {isDesktop ? (
        // DESKTOP — Keep old overlapping design
        <div className="destination-grid destination-grid-cross">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className={`destination-card destination-card-pro ${dest.hoverClass} ${dest.positionClass}`}
            >
              <img src={dest.image} alt={dest.title} className="destination-image" />
              <div className="destination-overlay">
                <h3 className="destination-title">{dest.title}</h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // MOBILE/TABLET — Looping slider
        <div
          ref={sliderRef}
          style={{
            display: "flex",
            overflow: "hidden",
            width: "100%",
          }}
        >
          {loopPages.map((group, page) => (
            <div
              key={page}
              style={{
                flex: "0 0 100%",
                display: "flex",
                gap: "1.8rem",
                padding: "3rem 1rem",
              }}
            >
              {group.map((dest, i) => (
                <div key={i} style={{ flex: "1" }}>
                  <div
                    className={`destination-card destination-card-pro ${dest.hoverClass}`}
                    style={{
                      background: "transparent",
                      borderRadius: "12px",
                    }}
                  >
                    <img
                      src={dest.image}
                      alt={dest.title}
                      className="destination-image"
                      style={{ borderRadius: "12px" }}
                    />
                    <div className="destination-overlay">
                      <h3 className="destination-title">{dest.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default DestinationShowcase;
