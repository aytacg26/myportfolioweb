import React from 'react';

const SocialIcon = ({ link, title, image }) => {
  return (
    <a href={link} title={title} target='_blank' rel='noopener noreferrer'>
      <img src={image} alt={title} />
    </a>
  );
};

export default SocialIcon;
