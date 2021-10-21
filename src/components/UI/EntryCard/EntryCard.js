import React from 'react';
import classes from './EntryCard.module.css';

const EntryCard = ({
  heading,
  subHeading,
  startYear,
  endYear,
  entryText,
  location,
  grade,
  isDarkMode,
}) => {
  return (
    <div className={classes.EntryCardContainer}>
      <div
        className={classes.EntryHeader}
        style={{ color: isDarkMode ? '#fff' : '#000' }}
      >
        <h2>{heading}</h2>
        {subHeading && <h4>{subHeading}</h4>}
      </div>
      <div className={classes.EntryDetails}>
        {grade && (
          <div className={classes.EntryDataGroup}>
            <label>CGPA</label>
            <span>{grade}</span>
          </div>
        )}
        {startYear && (
          <div className={classes.EntryDataGroup}>
            <label>Years</label>
            <span>{`${startYear} - ${endYear ? endYear : 'current'}`}</span>
          </div>
        )}
        {location && (
          <div className={classes.EntryDataGroup}>
            <label>Location</label>
            <span>{location}</span>
          </div>
        )}
      </div>
      {entryText && (
        <div className={classes.EntryText}>
          <p>{entryText}</p>
        </div>
      )}
    </div>
  );
};

export default EntryCard;
