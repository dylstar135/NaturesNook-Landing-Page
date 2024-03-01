import React from "react";
import "./App.css"; // Import your global styles

import backgroundImage from "./assets/background.jpg"; // Import your background image
import AboutUs from "./components/AboutUs";
import Title from "./components/Title";
import NavBar from "./components/NavBar";

function App() {
  console.log("Rendering App component");
  return (
    <div className="app" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <NavBar />
      <Title />
      <AboutUs />
    </div>
  );
}

export default App;
