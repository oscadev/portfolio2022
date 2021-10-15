import React from "react";
import { Btn } from "./Btn";

export const Footer = () => {
  return (
    <footer className="flex">
      <div className="flex row">
        <a href="https://www.linkedin.com/in/oscar-dev/" target="_blank">
          <i class="devicon-linkedin-plain-wordmark"></i>
        </a>

        <span className="material-icons">email</span>
      </div>
    </footer>
  );
};
