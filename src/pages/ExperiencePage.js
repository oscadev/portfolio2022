import React from "react";
import nisa from "../assets/img/nisa.png";

export const ExperiencePage = () => {
  return (
    <div id="experience" className="flex">
      <div className="box light flex">
        <div className="box-content">
          <h1>Experience</h1>
          <p>My experience, technologies, and stuff about me.</p>
        </div>
      </div>
      <Technologies />
      <Work />
      <Education />
    </div>
  );
};

const Technologies = () => {
  return (
    <div className="box flex">
      <div className="box-content">
        <h1>Tech Stacks</h1>
        <h2>Front End</h2>
        <p>
          HTML, CSS3, and Javascript for frontend development with React as the
          JS framework. SASS as the CSS pre-processor for better, and more
          organized styling.
        </p>
        <div className="flex row technologies">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
        </div>
        <h2>Back End</h2>
        <p>
          NodeJS, Express, NGINX, MongoDB, MySQL, Linux/Ubuntu for servers,
          creating APIs, CRUD databases, and other typical backend tasks.
        </p>
        <div className="flex row technologies">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
        </div>
        <h2>Mobile / App</h2>
        <p>React Native for iOS, Android, and tvOS development.</p>
        <div className="flex row technologies">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" />
        </div>
        <h2>Other</h2>
        <p>
          Experienced with typical tools such as SSH, git/github, ElectronJS for
          desktop development, NPM/YARN for package installation, and Raspberry
          Pi for hosting various servers, services, APIs, and more.
        </p>
        <div className="flex row technologies">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original-wordmark.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original-wordmark.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" />
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div className="box flex">
      <div className="box-content">
        <h1>Tech Experience</h1>
        <h2>Dev Work</h2>
        <div className="flex row start">
          {/* <img src={nisa} alt="" style={{ width: 100 }} /> */}
          <h3>NIS America inc</h3>
        </div>
        <h5>May 2020 - Current</h5>
        <p>
          Currently a web developer at NISA (a video game publisher). The work
          includes creating websites for the various video games published, as
          well as full stack projects such as creating a custom CMS, APIs that
          the company and other devs use for different tasks, and general devops
          (creating linux / nginx/ node servers to deploy sites).
        </p>
        <p className="noteworthy">
          Noteworthy: <br />
          Pitched and created a web service that saves the company about $16k a
          year.
          <br />
          Created scripts to automate tasks that were previously done manually
          such as{" "}
          <a
            href="https://www.npmjs.com/package/react-import-folder"
            target="_blank"
          >
            this NPM package
          </a>{" "}
          that converts an assets folder into a js file with all the items named
          and exported in a ready to use data object.
        </p>
        <div className="flex row start">
          {/* <img src={nisa} alt="" style={{ width: 100 }} /> */}
          <h3>Freelance Development</h3>
        </div>
        <h5>Dec 2018 - Current</h5>
        <p>
          Occasionally works on freelance projects that have included iOS, tvOS,
          and Android applications using React Native in addition to web dev
          work.
        </p>
        <p>
          Noteworthy: Pitched and created a system that will save the company
          about 16k a year.
        </p>
        <h2>Other</h2>
        <p>Also very experienced with computer repair and general IT.</p>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="box flex">
      <div className="box-content">
        <h1>Education</h1>

        <h2>Mt San Antonio College</h2>
        <h5>Walnut, CA</h5>
        <p>Majored in Anthropology and English</p>
        <p>Completed 90+ units with 3.8 GPA with Honors</p>
        <h2>Learning Fuze</h2>
        <h5>Irvine, CA</h5>
        <p>Web Development training course</p>
        <p>
          A 3 month long, 5 day a week fulltime web development training course.
        </p>
        <p>
          Worked on team projects in a work-like environment with other
          students.
        </p>
      </div>
    </div>
  );
};
