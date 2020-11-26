import React, { useState } from 'react';
import ContactsInfo from './contactInfo/ContactsInfo';
import './Head.css';

const Head = (props) => {
  const [showContactsClicked, setShowContactsClicked] = useState(false);

  const name = `< Artyom Syomin />`;

  const showContacts = () => {
    setShowContactsClicked(!showContactsClicked);
  };

  return (
    <div id="top" className="top-about">
      <div>
        <h1>{name}</h1>
        <h4>Front-end Developer.</h4>
      </div>
      <div>
        <button onClick={showContacts}>Show Contacts</button>
        {showContactsClicked && <ContactsInfo />}
      </div>
    </div>
  );
};

export default Head;
