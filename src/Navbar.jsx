import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const revealTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setHidden(true);
        if (revealTimer.current) clearTimeout(revealTimer.current);
        revealTimer.current = setTimeout(() => setHidden(false), 1000);
      } else {
        setHidden(false);
        if (revealTimer.current) clearTimeout(revealTimer.current);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (revealTimer.current) clearTimeout(revealTimer.current);
    };
  }, []);

  return (
    <header className={`nav ${hidden ? "nav-hide" : ""}`}>
      <div className="nav-inner">
        <div className="nav-left">
          <div className="brand">TF</div>

          <nav className="nav-links">
            <Link className="active" to="/">Home</Link>

            <div className="dropdown">
              <span>Features</span>
              <div className="dropdown-menu">
                <Link to="/">Smart Search</Link>
                <Link to="/">Live Sync</Link>
                <Link to="/">AI Assist</Link>
                <Link to="/">Analytics</Link>
              </div>
            </div>

            <Link to="/">Pricing</Link>
            <Link to="/">FAQs</Link>
            <Link to="/">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="nav-right">
          <input
            type="search"
            className="nav-search"
            placeholder="Search…"
          />
          <button className="btn-login">Login</button>
          <button className="btn-signup">Sign-up</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
