import React from 'react';
import { educationData } from '../../../../data/educationData';

const EducationItem = () => {
  const educationElements = educationData.map((elem) => {
    return (
      <div key={elem.id} id="education-item" className="education-item">
        <div className="educ-icon">
          <i className={elem.icon}></i>
        </div>
        <div className="educ-desc">
          <h3>{elem.title}</h3>
          <p>{elem.type}</p>
          <p>{elem.duration}</p>
          <a href={elem.link}>More Info...</a>
        </div>
      </div>
    );
  });
  return <>{educationElements}</>;
};

export default EducationItem;
