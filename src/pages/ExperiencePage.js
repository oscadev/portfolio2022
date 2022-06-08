import gsap from "gsap";
import React from "react";
import { ServerStyleSheet } from "styled-components";
import { Job } from "../components/Experience/Job";
import { TechStack } from "../components/Experience/TechStack";

export const ExperiencePage = () => {
  const [showArrow, setShowArrow] = React.useState(true);
  const techRef = React.useRef(null);
  const jobsRef = React.useRef(null);
  const eduRef = React.useRef(null);
  React.useEffect(() => {
    const buffer = 64;
    gsap.fromTo(
      techRef.current,
      { x: 64, y: -300 },
      {
        y: 0,
        x: 0,
        scrollTrigger: {
          trigger: "body",
          scrub: true,
          start: "0",
          end: "300px",
          // start: "top top",
          // end: "bottom bottom",
          // pin: techRef.current,
          // pinType: "fixed",
        },
      }
    );

    gsap.fromTo(
      jobsRef.current,
      { x: 56, y: -1850 },
      {
        y: 0,
        x: 0,
        scrollTrigger: {
          trigger: "body",
          scrub: true,
          start: "0",
          end: "300px",
          onEnterBack: () => setShowArrow(true),

          // start: "top top",
          // end: "bottom bottom",
          // pin: jobsRef.current,
          // pinType: "fixed",
        },
        onComplete: () => setShowArrow(false),
        onStart: () => setShowArrow(true),
      }
    );
    console.log(
      -document.querySelector("#education").getBoundingClientRect().y
    );
    gsap.fromTo(
      eduRef.current,
      {
        x: -(buffer * 2),
        y:
          -document.querySelector("#education").getBoundingClientRect().y +
          buffer * 10,
      },
      {
        y: 0,
        x: 0,
        scrollTrigger: {
          trigger: "body",
          scrub: true,
          start: "0",
          end: "300px",
          onEnterBack: () => setShowArrow(true),

          // start: "top top",
          // end: "bottom bottom",
          // pin: eduRef.current,
          // pinType: "fixed",
        },
        onComplete: () => setShowArrow(false),
        onStart: () => setShowArrow(true),
      }
    );
  }, []);
  return (
    <div id="experience" className="flex">
      <div className="box light flex">
        <div className="box-content">
          <h1>Experience</h1>
          <p>My experience, technologies, and stuff about me.</p>
        </div>
      </div>
      <Technologies theRef={techRef} />
      <Work theRef={jobsRef} showArrow={showArrow} />
      <Education theRef={eduRef} />
    </div>
  );
};

const Technologies = ({ theRef }) => {
  const techData = [
    {
      title: "Front End",
      body: `HTML, CSS3, and Javascript / Typescript for frontend development with
      React as the JS framework. SASS as the CSS pre-processor for better,
      and more organized styling.`,
      images: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      ],
    },
    {
      title: "Back End",
      body: `NodeJS, Express, NGINX, MongoDB, MySQL, Linux/Ubuntu for servers,
      creating APIs, CRUD databases, and other typical backend tasks.`,
      images: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      ],
    },
    {
      title: "Mobile / App",
      body: `React Native for iOS, Android, and tvOS development.`,
      images: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
      ],
    },
    {
      title: "Other",
      body: `Experienced with typical tools such as SSH, git/github, ElectronJS for
      desktop development, NPM/YARN for package installation, and Raspberry
      Pi for hosting various servers, services, APIs, and more.`,
      images: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
      ],
    },
  ];
  return (
    <div className="box flex" id="technologies" ref={theRef}>
      <div className="box-content">
        <h1>Tech Stacks</h1>
        {techData.map((tech, techIndex) => (
          <TechStack
            key={"a-tech-item-" + techIndex}
            title={tech.title}
            body={tech.body}
            images={tech.images}
          />
        ))}
      </div>
    </div>
  );
};

const Work = ({ theRef, showArrow }) => {
  const jobs = [
    {
      company: "Reform Collective",
      date: "April 2022 - current",
      body: `
      Currently a web developer at an amazing agency. I get to work with a very talented group of designers and developers on very cool products.
      The projects are built with Js/React/Typescript using styled-components and GSAP on the Gatsby framework.
      `,
      noteworthy: (
        <>
          <span>Noteworthy:</span> <br />
          Pitched and created a web service that saves the company about $16k a
          year.
          <br />
          <br />
          Created scripts to automate various tasks such as{" "}
          <a
            href="https://www.npmjs.com/package/react-import-folder"
            target="_blank"
          >
            this NPM package
          </a>{" "}
          that converts an assets folder into a js file with all the items ready
          to use.
        </>
      ),
    },
    {
      company: "NIS America inc",
      date: "May 2020 - April 2022",
      body: `
      Currently a web developer at NISA (a video game publisher). The work
      includes creating websites for the various video games published, as
      well as full stack projects such as creating a custom CMS, APIs that
      the company and other devs use for different tasks, and general
      devops.
      `,
      noteworthy: (
        <>
          <span>Noteworthy:</span> <br />
          Pitched and created a web service that saves the company about $16k a
          year.
          <br />
          <br />
          Created scripts to automate various tasks such as{" "}
          <a
            href="https://www.npmjs.com/package/react-import-folder"
            target="_blank"
          >
            this NPM package
          </a>{" "}
          that converts an assets folder into a js file with all the items ready
          to use.
        </>
      ),
    },
    {
      company: "Freelance",
      date: "Dec 2018 - current",
      body: `
      Occasionally works on freelance projects that have included iOS, tvOS, and Android applications using React Native in addition to web dev work.
      `,
      noteworthy: null,
    },
  ];
  return (
    <div className="box flex" id="jobs" ref={theRef}>
      <div className="box-content">
        <h1>Work Experience</h1>
        {showArrow
          ? jobs.map((job, jobIndex) => (
              <Job
                key={"job-psuedo" + jobIndex}
                company={job.company}
                date={job.date}
                body={job.body}
                noteworthy={job.noteworthy}
              />
            ))
          : jobs.map((job, jobIndex) => (
              <Job
                key={"job" + jobIndex}
                company={job.company}
                date={job.date}
                body={job.body}
                noteworthy={job.noteworthy}
              />
            ))}
      </div>
    </div>
  );
};

const Education = ({ theRef }) => {
  return (
    <div className="box flex" ref={theRef} id={"education"}>
      <div className="box-content">
        <h1>Education</h1>

        <h2>Learning Fuze</h2>
        <h5>Irvine, CA 2018</h5>
        <p>Web Development training course</p>
        <p>
          A 3 month long, 5 day a week fulltime web development training course.
        </p>
        <p>
          Worked on team projects in a work-like environment with other
          students.
        </p>

        <h2>Mt San Antonio College</h2>
        <h5>Walnut, CA 2014</h5>
        <p>Majored in Anthropology and English</p>
        <p>Completed 90+ units with 3.8 GPA with Honors</p>
      </div>
    </div>
  );
};
