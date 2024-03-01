import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

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
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          {/* Add more links as needed */}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
