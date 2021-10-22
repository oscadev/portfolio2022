import React from "react";
import { Btn } from "../components/Btn";

export const HomePage = ({ setModal }) => {
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

            <Btn
              icon="email"
              title={"Hire Me"}
              func={() => setModal(<Contact />)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  return (
    <div id="contact" className="flex">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <textarea
        placeholder="Message"
        name=""
        id=""
        cols="30"
        rows="10"
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
      ></textarea>
      <Btn title="send" variant="secondary" />
    </div>
  );
};
