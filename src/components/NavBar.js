// NavBar.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css"; // Import CSS file for styling

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="navbar-toggle" onClick={toggleNavBar}>
        {/* Using FontAwesomeIcon component to render the bars icon */}
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="navbar-content">
        {/* Content of the navbar */}
        <ul className="Nav-items">
          <li>About</li>
          <li>Untamed Spots</li>
          <li>Contact</li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
