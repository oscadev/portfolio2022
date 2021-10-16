import React from "react";
import { Btn } from "../components/Btn";

export const HomePage = () => {
  return (
    <div id="home" className="flex start">
      <div className="box flex">
        <div className="box-content">
          <h1>I'm Oscar Anguiano</h1>
          <p>
            Web Developer at NIS America. <br />
            Welcome to my portfolio page.
          </p>
          <div className="flex row  start full">
            <Btn
              icon="description"
              title={"My Resume"}
              variant="secondary"
              func={() => alert("Almost done!")}
            />
            <Btn
              icon="email"
              title={"Hire Me"}
              func={() => alert("Most buttons work. Just these two dont yet!")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
