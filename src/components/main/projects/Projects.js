import React from 'react';
import './Projects.css';
import ProjectItem from './ProjectItem/ProjectItem';

const Projects = (props) => {
  return (
    <div id="projects" className="projects">
      <h2>Projects.</h2>
      <div className="container">
        <div className="row">
          <ProjectItem />
        </div>
      </div>
    </div>
  );
};

export default Projects;
