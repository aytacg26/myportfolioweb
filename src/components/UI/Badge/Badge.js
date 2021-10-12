import React from 'react';
import classes from './Badge.module.css';

const Badge = ({ href, title, logoIcon, badgeColor }) => {
  return (
    <a
      href={href}
      alt={title}
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
