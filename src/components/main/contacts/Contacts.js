import React from 'react';
import './Contacts.css';
import ContactIcons from './ContactIcons/ContactIcons'

const Contacts = (props) => {
  return (
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
        <ContactIcons/>
      </div>
    </div>
  );
};

export default Contacts;
