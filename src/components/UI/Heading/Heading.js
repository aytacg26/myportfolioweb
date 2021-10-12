import React from 'react';
import classes from './Heading.module.css';
import { useSelector } from 'react-redux';

const Heading = ({ title, left }) => {
  const { darkMode } = useSelector((state) => state.mode);

  return (
    <div className={classes.HeadingContainer}>
      {left && <span></span>}
      <h1 style={{ color: darkMode ? '#8e8e8e' : '#323233' }}>{title}</h1>
      {!left && <span></span>}
    </div>
  );
};

export default Heading;
