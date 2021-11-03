import React from 'react';
import classes from './ActionButtons.module.scss';
import { Link } from 'react-router-dom';
import { publish } from '../../../Types/UtilFunctionTypes';
import { getPublishDetails } from '../../../Utils/Utils';
import PropTypes from 'prop-types';

interface IProps {
  onSiteLink?: string;
  outLink: string;
  publishedOn: publish;
}

const ActionButtons = ({ onSiteLink, outLink, publishedOn }: IProps) => {
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

ActionButtons.propTypes = {
  onSiteLink: PropTypes.string,
  outLink: PropTypes.string.isRequired,
  publishedOn: PropTypes.string.isRequired,
};
