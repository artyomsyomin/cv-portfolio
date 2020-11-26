import React from 'react';
import './Education.css';

const Education = (props) => {
    return (
        <div id="education" className="education">
          <h2>Education and Courses.</h2>
          <div id="education-item" className="education-item">
            <div className="educ-icon">
              <i className="fas fa-university fa-5x"></i>
            </div>
            <div className="educ-desc">
              <h3>SibSUTIS (СибГУТИ)</h3>
              <p>
                (Сибирский государственный университет телекоммуникаций и
                информатики)
              </p>
              <p>2016-2020г. (Информатика и вычислительная техника)</p>
              <a href="https://sibsutis.ru/">More Info...</a>
            </div>
          </div>
          <div id="education-item" className="education-item">
            <div className="educ-icon">
              <i className="fas fa-laptop-code fa-5x"></i>
            </div>
            <div className="educ-desc">
              <h3>The Complete Web Development Bootcamp</h3>
              <p>Online Course</p>
              <p> 469 lectures - 54h 12m total length</p>
              <a href="https://www.udemy.com/certificate/UC-e6c2fb0b-5229-494a-9c85-4a854edcba24/">
                More Info...
              </a>
            </div>
          </div>

          <div id="education-item" className="education-item">
            <div className="educ-icon">
              <i className="fas fa-laptop-code fa-5x"></i>
            </div>
            <div className="educ-desc">
              <h3>React - The Complete Guide</h3>
              <p>Online Course</p>
              <p>491 lectures - 40h 37m total length</p>
              <a href="https://www.udemy.com/certificate/UC-53f9c4bd-94a5-4e1c-ac8f-0eda57c02a33/">
                More Info...
              </a>
            </div>
          </div>

          <div id="education-item" className="education-item">
            <div className="educ-icon">
              <i className="fas fa-laptop-code fa-5x"></i>
            </div>
            <div className="educ-desc">
              <h3>Build Telegram Bots with JavaScript</h3>
              <p>Online Course</p>
              <p>140 lectures - 5h 27m total length</p>
              <a href="https://www.udemy.com/certificate/UC-ccc8324c-e430-43a2-8226-808bf6d94549/">
                More Info...
              </a>
            </div>
          </div>
        </div>
    )
}

export default Education;