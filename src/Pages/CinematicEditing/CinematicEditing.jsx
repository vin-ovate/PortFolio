import React from "react";
import "./CinematicEditing.css";
import Navbar from "../../components/Navbar/Navbar.jsx"

const CinematicEditing = () => {
  return (
    <>
      <div class="nav">
      <Navbar/>
      </div>
    <div className="cinematic-container">
      <header className="cinematic-header">
        <h1>Cinematic - Editing</h1>
        <h3 className="cinematic-subtitle">Videos to be uploaded..!</h3>
      </header>
    </div>
    </>
  );
};
export default CinematicEditing;