import React from 'react';
import {projectData} from '../../../../data/projectsData';

const ProjectItem = () => {

    const projectElements = projectData.map(elem => {
        return (
            <div key={elem.id} className="col-md-4">
            <div id="proj-item">
              <span>
                <i className={elem.icon}></i>
              </span>
        <h3>{elem.title}</h3>
              <p className="used-tech">Used technologies:</p>
              <p>{elem.technologies}</p>
              <a href={elem.openLink}>Open Project</a>
              <a href={elem.gitLink}>GitHub Page</a>
            </div>
          </div>
        )
    })

    return (
        <>
        {projectElements}
        </>
    )
}

export default ProjectItem;