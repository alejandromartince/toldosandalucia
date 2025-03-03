import React from "react";
import "./Section.css";

const SectionDivider = ({ color = "var(--negro-claro)" }) => {
  return (
    <div
      className="section-divider"
      style={{
        background: `linear-gradient(to bottom, transparent)`,
        height: ".5rem",
        width: "100%",
      }}
    ></div>
  );
};

export default SectionDivider;