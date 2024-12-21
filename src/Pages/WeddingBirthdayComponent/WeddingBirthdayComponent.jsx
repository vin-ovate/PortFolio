import React from "react";
import "./WeddingBirthdayComponent.css";
import Navbar from "../../components/Navbar/Navbar.jsx"
const WeddingBirthdayComponent = () => {
  return (
    <div>
      <div class="homepage-header">
      <Navbar/>
      </div>
      <main >
        <h1 id="cl" >Wedding-Birthday</h1>
        <p id="nl" >
          Invitation Video Editing
        </p>

        <div className="vido">
          <video
            autoPlay
            muted
            controls
            src="./assets/w1.mp4"
            width="30.8%"
            style={{ boxShadow: "0px 0px 10px rgb(51, 50, 50)" }}
          ></video>
          <video
            autoPlay
            muted
            controls
            id="first"
            src="../assets/w2.mp4"
            width="30%"
            style={{ boxShadow: "0px 0px 10px rgb(51, 50, 50)" }}
          ></video>
          <video
            autoPlay
            muted
            controls
            src="../assets/b1.mp4"
            width="31.25%"
            style={{ boxShadow: "0px 0px 10px rgb(51, 50, 50)" }}
          ></video>
        </div>
      </main>
    </div>
  );
};

export default WeddingBirthdayComponent;
