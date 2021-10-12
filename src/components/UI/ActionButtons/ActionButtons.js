import React from 'react';
import classes from './ActionButtons.module.css';
import { Link } from 'react-router-dom';
import { getPublishDetails } from '../../../Utils/Utils';

const ActionButtons = ({ onSiteLink, outLink, publishedOn }) => {
  let publishDetails = getPublishDetails(publishedOn);

  return (
    <div
      className={classes.Actions}
      style={{ justifyContent: onSiteLink ? 'space-between' : 'flex-end' }}
    >
      {onSiteLink && (
        <Link to={onSiteLink} title='Get More Information'>
          More Info
        </Link>
      )}
      {publishDetails.buttonColor && (
        <a
          href={outLink}
          target='_blank'
          rel='noopener noreferrer'
          style={{
            backgroundColor: publishDetails.buttonColor,
            color: publishDetails.textColor,
          }}
          title={`Published on ${publishedOn}`}
        >
          {publishDetails.buttonText}
        </a>
      )}
    </div>
  );
};

export default ActionButtons;
