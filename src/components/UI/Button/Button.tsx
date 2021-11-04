import React from 'react';
import classes from './Button.module.scss';
import PropTypes from 'prop-types';

interface IProps {
  isDarkMode?: boolean;
  otherProps?: React.HTMLProps<HTMLButtonElement>;
  children: JSX.Element | JSX.Element[] | string;
}

const Button = ({ isDarkMode, children, ...otherProps }: IProps) => (
  <button className={isDarkMode ? classes.darkMode : ''} {...otherProps}>
    {children}
  </button>
);

export default Button;

Button.propTypes = {
  isDarkMode: PropTypes.bool,
  otherProps: PropTypes.object,
};

Button.defaultProps = {
  isDarkMode: false,
  children: 'Send',
};
