import React from "react";
import { Link } from "react-router-dom";
import me from "../assets/img/logo.jpg";

export const Nav = () => {
  return (
    <nav className="box nav flex start">
      <img src={me} alt="" />
      <h4>Web Developer</h4>

      <Link to="/" className="flex row start">
        <p className="flex row start nav-item">
          <span className="material-icons">home</span>
          Home
        </p>
      </Link>

      <Link to="/experience" className="flex row start">
        <p className="flex row start nav-item">
          <span className="material-icons">person</span>
          Experience
        </p>
      </Link>
      <Link to="/projects" className="flex row start">
        <p className="flex row start nav-item">
          <span className="material-icons">apps</span>
          Projects
        </p>
      </Link>
    </nav>
  );
};
