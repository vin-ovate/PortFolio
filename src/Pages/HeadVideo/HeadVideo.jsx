import React, { useState } from "react";
import "./HeadVideo.css";
import Navbar from "../../components/Navbar/Navbar.jsx"

const HeadVideo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="homepage-container">
      <header className="homepage-header">
       <Navbar/>
      </header>
      <main className="homepage-main">
        <section className="intro-section">
          <h1 id="head" >Talking Head Video Editing</h1>
          <p id="content">
            Talking head video editing refers to the process of editing a video 
            featuring a person speaking directly to the camera, often with a plain background. 
            The goal is to create a polished and engaging video that effectively communicates the speaker's message.
          </p>
        </section>
       <section className="video-section">
          <video
            src="./assets/proj2-2.mp4"
            autoPlay
            loop
            controls
            muted
            className="video-large"
          ></video>
          

          <video
            src="./assets/proj3-1.mp4"
            autoPlay
            loop
            controls
          muted
            className="video-large"
          ></video>
        </section>
        <section className="demo-section">
          <p>Here is a demo video link of my client:</p>
    <a
  className="video-link"
  id="youtube-video-link"
  href="https://youtu.be/akt75xdsGsE?si=vL0pZ3PDlRzSs0BR"
  target="_blank"
  rel="noopener noreferrer"
>

  Watch on YouTube
</a>
        </section>
      </main>
    </div>
  );
};

export default HeadVideo;