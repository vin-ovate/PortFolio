import React, { useState } from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
    <Link to="/">  <a href="./vin-web.html" className="logo">
        Home
      </a></Link>
      <button
        className="hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <span className="icon close-icon">✕</span> // Close icon
        ) : (
          <span className="icon menu-icon">☰</span> // Menu icon
        )}
      </button>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
       
      <Link to="/head" id="m">  <li>Talking Head Video Editing</li></Link>
       <Link to="/color" id="m"> <li>Color Grading Video Editing</li></Link>
       <Link to="/cinema" id="m"> <li>Cinematic Video Editing</li></Link>
      <Link to="/wedding"
        id="m">  <li>Wedding Invitations</li></Link>
       <Link to="/poster" id="m"> <li>Posters & Birthday CDPs</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar;
