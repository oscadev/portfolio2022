import React from "react";
import { Btn } from "../components/Btn";

export const HomePage = ({ setModal }) => {
  return (
    <div id="home" className="flex start">
      <div className="box flex">
        <div className="box-content">
          <h1>I'm Oscar Anguiano</h1>
          <p>
            Web Developer at Reform Collective. <br />
            Welcome to my portfolio page.
          </p>
          <div className="flex row  start full">
            <a
              href="https://node.devosc.club/assets/portfolio/Resume_Oscar_Anguiano.pdf"
              target="_blank"
              download
            >
              <Btn
                icon="description"
                title={"My Resume"}
                variant="secondary"
                func={() => console.log("Resume")}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
