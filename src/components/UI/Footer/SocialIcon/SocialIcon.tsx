import React from 'react';
import PropTypes from 'prop-types';

interface IProps {
  link: string;
  title: string;
  image: string;
}

const SocialIcon = ({ link, title, image }: IProps) => {
  return (
    <a href={link} title={title} target='_blank' rel='noopener noreferrer'>
      <img src={image} alt={title} />
    </a>
  );
};

export default SocialIcon;

SocialIcon.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string,
  image: PropTypes.string.isRequired,
};
