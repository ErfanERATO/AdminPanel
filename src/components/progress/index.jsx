import React, { useState } from "react";
import "../../assets/styles/progress-bar-style.scss";

const ProgressBar = ({ done }) => {
  const [style, setStyle] = useState({});
  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: done + "%",
      backgroundColor: "#01d2e9",
    };
    setStyle(newStyle);
  }, 1000);
  return (
    <div className="progress">
      <div className="progress-done" style={style}></div>
    </div>
  );
};

export default ProgressBar;
