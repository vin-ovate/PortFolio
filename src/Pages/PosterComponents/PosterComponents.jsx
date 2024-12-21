import React from "react";
import "./PosterComponents.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
const PosterComponents = () => {
  return (
    <>
      <div class="nav-content">
       <Navbar/>
</div>
    <div className="poster-container">
     

       <main className="poster-content">
        <h1 id="cl" >Birthday CDP - Political Posters - Visiting Cards</h1>
        <p className="description">
          Go through the link below
        </p>
        <a
          className="insta"
          href="https://www.instagram.com/crazy_editz20?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          @Crazy_editz
        </a>
      </main>
    </div>
        </>
  );
};

export default PosterComponents;
