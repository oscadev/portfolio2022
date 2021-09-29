import React from "react";
import imgPCTRL from "../assets/img/projects/poison-control.png";
import imgRedeem from "../assets/img/projects/redeem.png";
import imgPortfolio from "../assets/img/projects/portfolio.png";
import imgPrinny from "../assets/img/projects/prinny.png";
import { Btn } from "../components/Btn";

export const ProjectsPage = () => {
  return (
    <div id="projects" className="flex row">
      {data.map((e, i) => (
        <Project
          key={i}
          title={e.title}
          body={e.body}
          img={e.img}
          code={e.code}
          live={e.live}
        />
      ))}
    </div>
  );
};

const Project = ({ title, body, img, code = null, live = null }) => {
  return (
    <div className="box project flex start">
      <h2 className="project-title">{title}</h2>
      <img src={img} alt="" />
      <p className="project-body">{body}</p>
      <div className="flex row project-bar">
        {code ? <Btn title="View Code" /> : null}
        <a href={live} target="_blank">
          <Btn title="View Live" variant="secondary" />
        </a>
      </div>
    </div>
  );
};

const data = [
  {
    title: "This Portfolio",
    body: <>Made this portfolio with React and Sass.</>,
    img: imgPortfolio,
    code: "github.com",
    live: "https://nisamerica.com/poison-control",
  },
  {
    title: "Poison Control",
    body: <>Website for the video game "Poison Control" made with React.</>,
    img: imgPCTRL,
    code: null,
    live: "https://nisamerica.com/poison-control",
  },
  {
    title: "Asset Download System",
    body: (
      <>
        Website and backend for downloading video game assets using codes
        included in game purchases.
      </>
    ),
    img: imgRedeem,
    code: null,
    live: "https://nisamerica.com/redeem/",
  },
  {
    title: "Prinny 1&2",
    body: <>Website for the video game "Prinny 1&2" made with React.</>,
    img: imgPrinny,
    code: null,
    live: "https://prinnies.com",
  },
  {
    title: "This Portfolio",
    body: <>Website for the video game "Poison Control" made with React.</>,
    img: imgPortfolio,
    code: "github.com",
    live: "https://nisamerica.com/poison-control",
  },
  {
    title: "Poison Control",
    body: <>Website for the video game "Poison Control" made with React.</>,
    img: imgPCTRL,
    code: null,
    live: "https://nisamerica.com/poison-control",
  },
  {
    title: "This Portfolio",
    body: <>Website for the video game "Poison Control" made with React.</>,
    img: imgPortfolio,
    code: "github.com",
    live: "https://nisamerica.com/poison-control",
  },
  {
    title: "Poison Control",
    body: <>Website for the video game "Poison Control" made with React.</>,
    img: imgPCTRL,
    code: null,
    live: "https://nisamerica.com/poison-control",
  },
];
