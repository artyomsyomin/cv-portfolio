import React from 'react';

import './ContactsInfo.css';

const ContactsInfo = () => {
  return (
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
};

export default ContactsInfo;