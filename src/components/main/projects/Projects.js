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
          {/* {/* <div className="col">
            <div id="proj-item">
              <span>
                <i className="fas fa-hamburger fa-5x"></i>
              </span>
              <h3>Burger Building app</h3>
              <p className="used-tech">Used technologies:</p>
              <p>React, Redux, Hooks, html, Css...</p>
              <a href="#toapp">Open Project</a>
              <a href="#todit">GitHub Page</a>
            </div> */}
        </div>

        {/* <div className="col">
            <div id="proj-item">
              <span>
                <i className="fas fa-hamburger fa-5x"></i>
              </span>
              <h3>Burger Building app</h3>
              <p className="used-tech">Used technologies:</p>
              <p>React, Redux, Hooks, html, Css...</p>
              <a href="#toapp">Open Project</a>
              <a href="#todit">GitHub Page</a>
            </div>
          </div>
          <div className="col">
            <div id="proj-item">
              <span>
                <i className="fas fa-hamburger fa-5x"></i>
              </span>
              <h3>Burger Building app</h3>
              <p className="used-tech">Used technologies:</p>
              <p>React, Redux, Hooks, html, Css...</p>
              <a href="#toapp">Open Project</a>
              <a href="#todit">GitHub Page</a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div id="proj-item">
              <span>
                <i className="fas fa-hamburger fa-5x"></i>
              </span>
              <h3>Burger Building app</h3>
              <p className="used-tech">Used technologies:</p>
              <p>React, Redux, Hooks, html, Css...</p>
              <a href="#toapp">Open Project</a>
              <a href="#todit">GitHub Page</a>
            </div>
          </div>
          <div className="col">
            <div id="proj-item">
              <span>
                <i className="fas fa-hamburger fa-5x"></i>
              </span>
              <h3>Burger Building app</h3>
              <p className="used-tech">Used technologies:</p>
              <p>React, Redux, Hooks, html, Css...</p>
              <a href="#toapp">Open Project</a>
              <a href="#todit">GitHub Page</a>
            </div>
          </div>
          <div className="col">
            <div id="proj-item">
              <span>
                <i className="fas fa-hamburger fa-5x"></i>
              </span>
              <h3>Burger Building app</h3>
              <p className="used-tech">Used technologies:</p>
              <p>React, Redux, Hooks, html, Css...</p>
              <a href="#toapp">Open Project</a>
              <a href="#todit">GitHub Page</a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
