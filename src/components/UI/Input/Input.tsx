import React, { InputHTMLAttributes } from 'react';
import classes from './Input.module.scss';
import PropTypes from 'prop-types';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean;

  otherProps?: JSX.IntrinsicAttributes;
}

const Input = ({ isValid, ...otherProps }: IProps) => {
  return (
    <input {...otherProps} className={`${!isValid && classes.invalidInput}`} />
  );
};

export default Input;

Input.propTypes = {
  isValid: PropTypes.bool,
};

Input.defaultProps = {
  isValid: true,
};
