import React from "react";
import ReactPlayer from "react-player";

import imgPCTRL from "../assets/img/projects/poison-control.png";
import imgRedeem from "../assets/img/projects/redeem.png";
import imgPortfolio from "../assets/img/projects/portfolio.png";
import imgPrinny from "../assets/img/projects/prinny.png";
import imgPS4 from "../assets/img/projects/ps4.png";
import imgGanza from "../assets/img/projects/ganza.jpg";
import { Btn } from "../components/Btn";

export const ProjectsPage = ({ setModal }) => {
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
          video={e.video}
          setModal={setModal}
        />
      ))}
    </div>
  );
};

const Project = ({
  title,
  body,
  img,
  code = null,
  live = null,
  video = null,
  setModal,
}) => {
  return (
    <div className="box project flex start">
      <h2 className="project-title">{title}</h2>
      <img src={img} alt="" />
      <p className="project-body">{body}</p>
      <div className="flex row project-bar">
        {live ? (
          <a href={live} target="_blank">
            <Btn title="View Live" variant="secondary" />
          </a>
        ) : null}

        {code ? (
          <a href={code} target="_blank">
            <Btn title="View Code" />
          </a>
        ) : null}
        {video ? (
          <Btn
            title="Video"
            variant="tertiary"
            func={() =>
              setModal(
                <>
                  <p>{title}</p>
                  <ReactPlayer
                    url={video}
                    controls
                    volume={null}
                    width="100%"
                    height="100%"
                  />
                </>
              )
            }
          />
        ) : null}
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
        Website and backend system for downloading video game assets using
        codes.
      </>
    ),
    img: imgRedeem,
    code: null,
    live: "https://nisamerica.com/redeem/",
    video: "https://node.devosc.club/assets/portfolio/ads-fullstack-video.mov",
  },
  {
    title: "Prinny 1&2",
    body: <>Website for the video game "Prinny 1&2" made with React.</>,
    img: imgPrinny,
    code: null,
    live: "https://prinnies.com",
  },
  {
    title: "Playstation 4 Menu JS",
    body: <>Recreated the PS4 menu with React in 2019 for fun.</>,
    img: imgPS4,
    code: "https://github.com/oscadev/psm/tree/master/src",
    live: "https://nisamerica.com/poison-control",
  },
  {
    title: "React Native Freelance",
    body: (
      <>
        Created the "launchpad" section for a client. Used multiple APIS (googla
        maps, google autofill, yelp, documenu.)
      </>
    ),
    img: imgGanza,
    code: null,
    live: null,
    video: "https://node.devosc.club/assets/portfolio/react-native-video.mov",
  },
  {
    title: "NPM Package",
    body: <>Website for the video game "Poison Control" made with React.</>,
    img: imgPortfolio,
    code: "https://github.com/oscadev/react-import-folder",
    live: null,
    video: "https://node.devosc.club/assets/portfolio/npm-package-video.mov",
  },
  // {
  //   title: "Poison Control",
  //   body: <>Website for the video game "Poison Control" made with React.</>,
  //   img: imgPCTRL,
  //   code: null,
  //   live: "https://nisamerica.com/poison-control",
  // },
];
