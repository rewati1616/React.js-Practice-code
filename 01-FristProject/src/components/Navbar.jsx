import React, { useState } from "react";
import { Search, Bell, ChevronDown } from "lucide-react";

const Navbar = ({ onHomeClick, onLoginClick, onSignupClick }) => {
  const [jobDropdown, setJobDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>JobHub</h2>
      </div>

      <ul className="nav-links">
        <li>
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              onHomeClick?.();
            }}
          >
            Home
          </a>
        </li>

        {/* Find Jobs Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setJobDropdown(true)}
          onMouseLeave={() => setJobDropdown(false)}
        >
          <a href="/">
            Find Jobs <ChevronDown size={16} />
          </a>

          {jobDropdown && (
            <ul className="dropdown-menu">
              <li>Frontend Developer</li>
              <li>Backend Developer</li>
              <li>Full Stack Developer</li>
              <li>UI/UX Designer</li>
              <li>React Developer</li>
              <li>Node.js Developer</li>
              <li>DevOps Engineer</li>
              <li>Data Analyst</li>
            </ul>
          )}
        </li>

        {/* Companies Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setCompanyDropdown(true)}
          onMouseLeave={() => setCompanyDropdown(false)}
        >
          <a href="/">
            Companies <ChevronDown size={16} />
          </a>

          {companyDropdown && (
            <ul className="dropdown-menu">
              <li>Amazon</li>
              <li>Google</li>
              <li>Microsoft</li>
              <li>Meta</li>
              <li>Netflix</li>
              <li>Adobe</li>
              <li>Spotify</li>
              <li>Salesforce</li>
            </ul>
          )}
        </li>

        <li>
          <a href="/">About</a>
        </li>
      </ul>

      <div className="search-box">
        <Search size={18} />
        <input type="text" placeholder="Search jobs..." />
      </div>

      <div className="nav-right">
        <Bell size={20} />
        <button className="login-btn" onClick={onLoginClick}>Login</button>
        <button className="signup-btn" onClick={onSignupClick}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;