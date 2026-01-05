import React, { useState, useRef, useEffect } from "react";
import "./App.css";

export default function Header() {
  const [isAuth, setIsAuth] = useState(false); // simulate auth
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const profileRef = useRef(null);
 
  useEffect(() => {
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="app-header">
      <div className="header-left">
        <div className="logo">Trip<span>Flow</span></div>
      </div>

      <nav className={`header-nav ${mobileOpen ? "open" : ""}`}>
        <a>Explore</a>
        <a>Trips</a>
        <a>Deals</a>
        <a>Support</a>
      </nav>

      <div className="header-right">
        {!isAuth && (
          <button className="signin-btn" onClick={() => setIsAuth(true)}>
            Sign in
          </button>
        )}

        {isAuth && (
          <div className="profile-wrapper" ref={profileRef}>
            <div
              className="avatar"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <img src="https://i.pravatar.cc/40" alt="user" />
            </div>

            {profileOpen && (
              <div className="profile-dropdown">
                <button>Dashboard</button>
                <button>My Trips</button>
                <button>Settings</button>
                <button
                  className="logout"
                  onClick={() => {
                    setIsAuth(false);
                    setProfileOpen(false);
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}

        <div
          className={`hamburger ${mobileOpen ? "active" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
}
