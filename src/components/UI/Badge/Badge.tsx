import React from 'react';
import classes from './Badge.module.scss';
import PropTypes from 'prop-types';

interface IProps {
  href: string;
  title: string;
  logoIcon?: string;
  badgeColor: string;
}

//logoIcon will be React Element, it is not string
const Badge = ({ href, title, logoIcon, badgeColor }: IProps) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      title={title}
      style={{ backgroundColor: badgeColor }}
      className={classes.Badge}
    >
      {logoIcon && <span className={classes.BadgeIcon}>{logoIcon}</span>}
      <span className={classes.BadgeTitle}>{title}</span>
    </a>
  );
};

export default Badge;

Badge.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  logoIcon: PropTypes.string,
  badgeColor: PropTypes.string.isRequired,
};
