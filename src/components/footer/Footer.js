import React from 'react';
import './Footer.css';

const Footer = (props) => {
  return (
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
  );
};

export default Footer;
