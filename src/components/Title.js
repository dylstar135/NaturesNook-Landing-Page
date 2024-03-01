// Title.js
import React, { useEffect, useState } from "react";
import "./title.css";

const Title = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    // Trigger the animation after a delay (adjust as needed)
    const timeout = setTimeout(() => {
      setShowSubtitle(true);
    }, 1500); // 500 milliseconds delay

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []); // Run this effect only once after component mounts

  return (
    <div className="title-container">
      <h1>NaturesNooks</h1>
      <h2 className={showSubtitle ? "subtitle show" : "subtitle"}>
        Embrace The Untamed
      </h2>
    </div>
  );
};

export default Title;
