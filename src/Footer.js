import React from "react";
import "./Footer.css";

import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaXTwitter,
  FaEnvelope,
  FaPhone,
  FaLocationDot
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <div className="brand-header">
            <div className="brand-logo">TF</div>
            <h3>TripFlow</h3>
          </div>

          <p className="brand-text">
            Discover destinations, plan experiences, and travel smarter with
            TripFlow — your trusted travel companion.
          </p>

          <div className="social-icons">
            <a href="https://www.instagram.com/" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://x.com/" aria-label="Twitter"><FaXTwitter /></a>
            <a href="https://in.pinterest.com/" aria-label="Pinterest"><FaPinterestP /></a>
            <a href="https://www.facebook.com/" aria-label="Facebook"><FaFacebookF /></a>
          </div>
        </div>

        {/* Explore */}
        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li><a href="https://iwetechs.vercel.app/">Destinations</a></li>
            <li><a href="https://iwetechs.vercel.app/">Experiences</a></li>
            <li><a href="https://iwetechs.vercel.app/">Tours</a></li>
            <li><a href="https://iwetechs.vercel.app/">Pricing</a></li>
            <li><a href="https://iwetechs.vercel.app/">Blog</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="https://iwetechs.vercel.app/">FAQs</a></li>
            <li><a href="https://iwetechs.vercel.app/">Help Center</a></li>
            <li><a href="https://iwetechs.vercel.app/">Privacy Policy</a></li>
            <li><a href="https://iwetechs.vercel.app/">Terms & Conditions</a></li>
            <li><a href="https://iwetechs.vercel.app/">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column contact-column">
          <h4>Contact</h4>

          <div className="contact-item">
            <FaEnvelope />
            <span>sujalkakadiya1296@gmail.com</span>
          </div>

          <div className="contact-item">
            <FaPhone />
            <span>+91 96646 97037</span>
          </div>

          <div className="contact-item">
            <FaLocationDot />
            <span>1017-iwetechs, RK-superme, Near nana mova circle, 150 Feet Ring Road, Rajkot, Gujarat.</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} TripFlow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
