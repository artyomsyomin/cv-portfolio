import React from 'react';

import { socialIcons } from '../../../../data/socialLinkIcons';

const ContactIcons = () => {
  const socialIconsLinks = socialIcons.map((icon) => {
    return (
      <a key={icon.id} href={icon.link}>
        <i className={icon.icon}></i>
      </a>
    );
  });

  return (
      <>
      {socialIconsLinks}
      </>
  );
};

export default ContactIcons;
