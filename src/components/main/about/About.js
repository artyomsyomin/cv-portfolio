import React from 'react';
import './About.css'

import Languages from './languages/Languages';
import Skills from './skills/Skills';

const About = (props) => {
  return (
    <div id="about" className="about">
      <h2>About me.</h2>
      <Languages />
      <Skills />
    </div>
  );
};

export default About;
