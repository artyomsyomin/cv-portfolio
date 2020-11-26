import React from 'react';
import ContactIcons from '../../contacts/ContactIcons/ContactIcons';
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
          <ContactIcons />
        </div>
      </div>
    </div>
  );
};

export default ContactsInfo;
