import React from "react";
import "./ColorGrading.css";
import Navbar from "../../components/Navbar/Navbar.jsx"
const ColorGrading = () => {
  return (
    <>
      <div class="nav">
      <Navbar/>
      </div>
    <div className="color-grading-container">
      <header className="color-grading-header">
        <h1>Color Grading</h1>
        <h3 className="color-grading-subtitle">Videos to be uploaded..!</h3>
      </header>
    </div>
    </>
  );
};

export default ColorGrading;