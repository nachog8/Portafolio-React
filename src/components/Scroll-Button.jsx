import React from "react";

const ScrollButton = () => {
  return (
    <div>
      <a
        className="scroll-button"
        href="#header"
        data-tooltip-content="Volver Arriba"
      >
        <svg
          fill="#000000"
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          id="up"
          data-name="Flat Color"
          xmlns="http://www.w3.org/2000/svg"
          className="icon flat-color"
        >
          <path
            id="primary"
            d="M19.71,9.29l-7-7a1,1,0,0,0-1.42,0l-7,7a1,1,0,0,0,1.42,1.42L11,5.41V21a1,1,0,0,0,2,0V5.41l5.29,5.3a1,1,0,0,0,1.42,0A1,1,0,0,0,19.71,9.29Z"
            style={{ fill: "rgb(255, 255, 255)" }}
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default ScrollButton;
