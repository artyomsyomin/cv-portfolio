import React, { useState } from 'react';
import './Header.css'

const Header = (props) => {
  const [topnav, setTopnav] = useState('topnav');

  const myFunction = (e) => {
    e.preventDefault();
    if (topnav === 'topnav') {
      setTopnav('topnav responsive');
    } else {
      setTopnav('topnav');
    }
    console.log(topnav);
  };

  return (
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
  );
};

export default Header;
