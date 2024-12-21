import React from "react";
import "./Homepage.css";
import Navbar from "../../components/Navbar/Navbar.jsx";

const Homepage = () => {
  return (
    <>
      <div className="homepage-nav">
        <Navbar />
      </div>
      <div className="homepage-showcase">
        <img className="homepage1-logo" src="./assets/vin.png" alt="Logo" />
        <div className="homepage-title">
          <h1 className="homepage-main-title">Inno-Vin.tech</h1>
          <h2 className="homepage-sub-title">Quality edits - Affordable prices!</h2>
          <p className="homepage-lead homepage-hide-on-small">
            Welcome to your one-stop shop for edits! We're thrilled to offer you
            top-notch services at friendly prices, because we believe that amazing
            quality shouldn't break the bank. Trust us to bring your vision to life,
            and experience the best value for your hard-earned money!
          </p>
        </div>
      </div>
    </>
  );
};

export default Homepage;