import React from "react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="footer-logo">JobHub</h2>
          <p>
            Connecting talented professionals with top companies worldwide.
            Find your dream job and grow your career with JobHub.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Find Jobs</a></li>
            <li><a href="/">Companies</a></li>
            <li><a href="/">About Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Job Categories</h3>
          <ul>
            <li>Frontend Developer</li>
            <li>Backend Developer</li>
            <li>Full Stack Developer</li>
            <li>UI/UX Designer</li>
            <li>Data Analyst</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>
            <Mail size={16} /> support@jobhub.com
          </p>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2026 JobHub. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;