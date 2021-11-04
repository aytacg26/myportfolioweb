import React from 'react';
import classes from './Heading.module.scss';
import { IRootState } from '../../../Interfaces/IState';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

interface IProps {
  title: string;
  left: boolean;
}

const Heading = ({ title, left }: IProps) => {
  const { darkMode } = useSelector((state: IRootState) => state.mode);

  return (
    <div className={classes.HeadingContainer}>
      {left && <span></span>}
      <h1 style={{ color: darkMode ? '#8e8e8e' : '#323233' }}>{title}</h1>
      {!left && <span></span>}
    </div>
  );
};

export default Heading;

Heading.propTypes = {
  title: PropTypes.string,
  left: PropTypes.bool,
};

Heading.defaultProps = {
  title: '',
  left: true,
};
