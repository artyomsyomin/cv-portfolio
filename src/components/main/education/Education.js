import React from 'react';
import './Education.css';
import EducationItem from './educationItem/EducationItem';

const Education = (props) => {
  return (
    <div id="education" className="education">
      <h2>Education and Courses.</h2>
      <EducationItem />
    </div>
  );
};

export default Education;
