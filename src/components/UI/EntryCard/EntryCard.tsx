import React from 'react';
import classes from './EntryCard.module.scss';
import PropTypes from 'prop-types';

interface IProps {
  heading: string;
  subHeading?: string;
  startYear?: number;
  endYear?: number;
  entryText?: string;
  location?: string;
  grade?: string;
  isDarkMode: boolean;
}

const EntryCard = ({
  heading,
  subHeading,
  startYear,
  endYear,
  entryText,
  location,
  grade,
  isDarkMode,
}: IProps) => {
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

EntryCard.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string,
  startYear: PropTypes.number,
  endYear: PropTypes.number,
  entryText: PropTypes.string,
  location: PropTypes.string,
  grade: PropTypes.string,
  isDarkMode: PropTypes.bool.isRequired,
};
