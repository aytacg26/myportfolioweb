import React from 'react';
import classes from './PresentationSection.module.css';

const PresentationSection = ({ children, column }) => {
  return (
    <div
      className={
        column
          ? classes.PresentationSectionContainerColumn
          : classes.PresentationSectionContainerRow
      }
    >
      {children}
    </div>
  );
};

export default PresentationSection;
