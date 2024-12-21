import React from "react";
import { Routes, Route } from "react-router-dom";
import HeadVideo from "./Pages/HeadVideo/HeadVideo.jsx";
import WeddingBirthdayComponent from "./Pages/WeddingBirthdayComponent/WeddingBirthdayComponent.jsx";
import PosterComponents from "./Pages/PosterComponents/PosterComponents.jsx";
import CinematicEditing from "./Pages/CinematicEditing/CinematicEditing.jsx"
import Homepage from "./Pages/Homepage/Homepage.jsx"
import ColorGrading from "./Pages/ColorGrading/ColorGrading.jsx"
const App = () => {
  return (
    
      <div className="app">
        <Routes>
          <Route path="/wedding" element={<WeddingBirthdayComponent />} />
          <Route path="/head" element={<HeadVideo />} />
          <Route path="/poster" element={<PosterComponents/>} />
      <Route path="/cinema" element={<CinematicEditing/>} />
       <Route path="/color" element={<ColorGrading/>} />
      <Route path="/" element={<Homepage/>} />
        </Routes>
      </div>
    
  );
};

export default App;