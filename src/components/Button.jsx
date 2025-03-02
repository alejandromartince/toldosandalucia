import React from "react";
import "./Button.css";

const Button = ({ children, onClick, className }) => {
  return (
    <div className="styled-wrapper">
      <button className={`button ${className}`} onClick={onClick}>
        <div className="button-box">
          <span className="button-elem">{children}</span>
          <span className="button-elem">{children}</span>
        </div>
      </button>
    </div>
  );
};

export default Button;
