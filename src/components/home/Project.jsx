import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import "./Project.css";
import amazon from "./images/amazon.png";
import covidtr from "./images/covidtr.png";
import messaging from "./images/messaging.png";
import netflix from "./images/netflix.png";
import {
  projectHeading,
  gitHubLink,
  gitHubUsername,
  gitHubQuerry,
  projectsLength,
  projects,
} from "../../editable-stuff/configurations.json";

const Project = () => {
  // const [projectsArray, setProjectsArray] = useState([]);

  // const handleRequest = useCallback((e) => {
  //   axios
  //     .get(gitHubLink + gitHubUsername + gitHubQuerry)
  //     .then((response) => {
  //       // handle success
  //       // console.log(response.data.slice(0, 4));
  //       return setProjectsArray(response.data.slice(0, projectsLength));
  //     })
  //     .catch((error) => {
  //       // handle error
  //       return console.error(error.message);
  //     })
  //     .finally(() => {
  //       // always executed
  //     });
  // }, []);

  // useEffect(() => {
  //   handleRequest();
  // }, [handleRequest]);

  return (
    <div
      id="projects"
      className="jumbotron jumbotron-fluid m-0"
      style={{ backgroundColor: "white" }}
    >
      {/* {projectsArray.length && (
        <div className="container container-fluid" >
          <h1 className="display-4 pb-5 text-center">{projectHeading}</h1>
          <div className="row">
            {projectsArray.map((project) => (
              <ProjectCard key={project.id} id={project.id} value={project} />
            ))}
          </div>
        </div>
      )} */}
      <div className="cards">
        <h1>Projects</h1>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {/* {projects.map((project) => (
              <ProjectCard
                src={project.image}
                text={project.title}
                label={project.text}
                link={project.link}
              />
            ))} */}
            <div>
              <ProjectCard
                src={amazon}
                text="Amazon Clone"
                label="Live Demo"
                link="https://netflix-clone-6842f.web.app/"
              />
              <ProjectCard
                src={covidtr}
                text="COVID-19 Tracker"
                label="Live Demo"
                link="https://netflix-clone-6842f.web.app/"
              />
            </div>
            <div>
              <ProjectCard
                src={messaging}
                text="Messaging Application"
                label="Github"
                link="https://netflix-clone-6842f.web.app/"
              />
              <ProjectCard
                src={netflix}
                text="Netflix Clone"
                label="Live Demo"
                link="https://netflix-clone-6842f.web.app/"
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
