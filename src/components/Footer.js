import React from "react";
import { Btn } from "./Btn";

export const Footer = () => {
  return (
    <footer className="flex">
      <div className="flex row">
        <a
          href="mailto: oscareadev@gmail.com"
          className="flex row link"
          style={{ margin: "0 16px", fontFamily: "Orbitron" }}
        >
          <span className="material-icons">email</span>
          <span style={{ fontSize: 12, marginLeft: 4 }}>
            oscareadev@gmail.com
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/oscar-dev/"
          target="_blank"
          style={{ margin: "0 16px" }}
          className="flex row link"
        >
          <i class="devicon-linkedin-plain-wordmark"></i>
        </a>
      </div>
    </footer>
  );
};
