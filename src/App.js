import React, { useState } from 'react';
import './App.css';

function App() {
  const [topnav, setTopnav] = useState('topnav');
  const [showContactsClicked, setShowContactsClicked] = useState(false);

  const name = `< Artyom Syomin />`;

  const myFunction = (e) => {
    e.preventDefault();
    if (topnav === 'topnav') {
      setTopnav('topnav responsive');
    } else {
      setTopnav('topnav');
    }
    console.log(topnav);
  };

  const showContacts = () => {
    setShowContactsClicked(!showContactsClicked);
  };

  const contactsInfo = (
    <div>
      <div id="added-contacts">
        <div className="added-contacts">
          <div className="added-contact-el">
            <p>
              Tel: <strong>+7 953 771 96 10</strong>
            </p>
          </div>
          <div className="added-contact-el">
            <p>
              Email: <strong>syominartyom@gmail.com</strong>
            </p>
          </div>
        </div>
        <div className="added-contact-links">
          <a href="https://vk.com/syominartyom">
            <i className="fab fa-vk fa-2x"></i>
          </a>
          <a href="https://github.com/artyomsyomin">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/artyom-syomin-a6a6261b6/">
            <i className="fab fa-linkedin-in fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <header id="navbar">
        <nav>
          <div className={topnav} id="myTopnav">
            <a href="#top">
              <i className="fas fa-arrow-circle-up"></i>
            </a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contacts">Contacts</a>
            <a href="/" className="icon" onClick={myFunction}>
              <i className="fas fa-bars"></i>
            </a>
          </div>
        </nav>
      </header>
      <main>
        <div id="top" className="top-about">
          <div>
            <h1>{name}</h1>
            <h4>Front-end Developer.</h4>
          </div>
          <div>
            <button onClick={showContacts}>Show Contacts</button>
            {showContactsClicked && contactsInfo}
          </div>
        </div>

        <div id="about" className="about">
          <div>
            {/* <hr /> */}
            <h2>About me.</h2>
            <div className="container">
              <h3>Languages:</h3>
              <div className="row ">
                <div className="col about-grid-items">
                  <ul>
                    <li>
                      <strong>Russain</strong> (native)
                    </li>
                    <li>
                      <strong>English</strong> (C1 - C2)
                    </li>
                  </ul>
                </div>
                <div className="col about-grid-items">
                  <ul>
                    <li>
                      <strong>Spanish</strong> (B1 - B2)
                    </li>
                    <li>
                      <strong>French</strong> (A2 - B1)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <h3>Skills:</h3>
            <div className="row">
              <div className="col about-grid-items">
                <ul>
                  <li>CSS(3)</li>
                  <li>HTML(5)</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Bootstrap</li>
                  <li>Materializecss</li>
                  <li>Node.js</li>
                </ul>
              </div>
              <div className="col about-grid-items">
                <ul>
                  <li>JQuery</li>
                  <li>OOP</li>
                  <li>C/C++</li>
                  <li>Firebase</li>
                  <li>MongoDB</li>
                  <li>Git</li>
                  <li>CLI</li>
                  <li>SASS / SCSS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
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
        <hr />
        <div id="projects" className="projects">
          <h2>Projects.</h2>
          <div className="container">
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
            </div>
          </div>
          <hr />
        </div>
        <div id="contacts">
          <div className="contacts">
            <h2>Contacts.</h2>
            <div className="contact-el">
              <p>
                Tel: <strong>+7 953 771 96 10</strong>
              </p>
            </div>
            <div className="contact-el">
              <p>
                Email: <strong>syominartyom@gmail.com</strong>
              </p>
            </div>
            <div className="contact-el">
              <p>
                GitHub: <strong>/artyomsyomin</strong>
              </p>
            </div>
            <div className="contact-el">
              <p>
                Vk: <strong>/syominartyom</strong>
              </p>
            </div>
          </div>
          <div className="icons-links">
            <a href="https://vk.com/syominartyom">
              <i className="fab fa-vk fa-2x"></i>
            </a>
            <a href="https://github.com/artyomsyomin">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/artyom-syomin-a6a6261b6/">
            <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
          </div>
        </div>
      </main>
      <footer>
        <div id="footer-links" className="footer-links">
          <a href="#top">
            <i className="fas fa-arrow-circle-up"></i>
          </a>
          <a href="#about"> About </a>
          <a href="#projects"> Projects </a>
          <a href="#contacts"> Contacts </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
