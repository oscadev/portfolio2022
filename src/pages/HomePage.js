import React from "react";
import { Btn } from "../components/Btn";

export const HomePage = () => {
  return (
    <div id="home" className="flex start">
      <div className="box flex">
        <div className="box-content">
          <h1>I'm Oscar Anguiano</h1>
          <p>Welcome to my portfolio page.</p>
          <div className="flex row  start full">
            <Btn icon="description" title={"My Resume"} variant="secondary" />
            <Btn icon="email" title={"Hire Me"} />
          </div>
        </div>
      </div>
    </div>
  );
};
