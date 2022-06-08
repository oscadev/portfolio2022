import React from "react";
import { Btn } from "./components/Btn";
import "./style/style.css";
import "material-design-icons/iconfont/material-icons.css";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Nav } from "./components/Nav";
import { ExperiencePage } from "./pages/ExperiencePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { Footer } from "./components/Footer";
import ScrollSmoother from "gsap/ScrollSmoother";
import ReactPlayer from "react-player";
import binaryVid from "./assets/img/binary.mp4";
import gsap from "gsap";

function App() {
  const [modal, setModal] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    //scroll to top when route changes
    window.scrollTo(0, 0);
    // create the scrollSmoother before your scrollTriggers
    ScrollSmoother.create({
      smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
      // smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    });
  }, [location]);

  React.useEffect(() => {
    gsap.fromTo(
      "#fixed-nav",
      { x: 64, y: 0 },
      {
        y: "10vh",
        x: 0,
        scrollTrigger: {
          trigger: "body",
          scrub: true,
          // start: "top top",
          // end: "bottom bottom",
          pin: "#fixed-nav",
          pinType: "fixed",
        },
      }
    );
  }, []);
  return (
    <>
      <div
        id="modal"
        className={`flex`}
        onClick={() => setModal(false)}
        style={{
          display: modal ? null : "none",
        }}
      >
        <div id="close-modal" onClick={() => setModal(false)}>
          close
        </div>
        <div
          id="modal-content"
          className="flex"
          onClick={(e) => e.stopPropagation()}
        >
          {modal}
        </div>
      </div>
      <div className="bg-pattern">
        <ReactPlayer
          url={binaryVid}
          playsinline
          volume={0}
          muted={true}
          playing
          loop
          width={"100vw"}
          height={"100vh"}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div id="fixed-nav">
        <Nav />
      </div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div id="center">
            <div
              className="flex row start"
              id="app"
              style={{ flexWrap: "nowrap" }}
            >
              <Switch>
                <Route path="/" exact>
                  <HomePage modal={modal} setModal={setModal} />
                </Route>
                <Route path="/experience">
                  <ExperiencePage />
                </Route>
                <Route path="/projects">
                  <ProjectsPage modal={modal} setModal={setModal} />
                </Route>
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
