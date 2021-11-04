import React, { Fragment } from 'react';
import TextArea from '../../../UI/TextArea/TextArea';
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';
import classes from './ContactForm.module.scss';
import PropTypes from 'prop-types';

interface IProps {
  name: string;
  email: string;
  message: string;
  nameHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  emailHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  messageHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  validMessage: boolean;
  validName: boolean;
  validEmail: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isDarkMode: boolean;
}

const ContactForm = ({
  name,
  email,
  message,
  nameHandler,
  emailHandler,
  messageHandler,
  validMessage,
  validName,
  validEmail,
  onSubmit,
  isDarkMode,
}: IProps) => {
  return (
    <Fragment>
      <form onSubmit={onSubmit} className={classes.MessageForm}>
        <Input
          isValid={!validName}
          type='text'
          value={name}
          onChange={nameHandler}
          placeholder='Full Name'
          name='name'
          autoComplete='off'
        />
        <Input
          isValid={!validEmail}
          type='text'
          value={email}
          onChange={emailHandler}
          placeholder='Email'
          name='email'
          autoComplete='off'
        />
        <TextArea
          name='message'
          value={message}
          showCounter
          maxLength={600}
          counterText='Remaining'
          onChange={messageHandler}
          notValid={!validMessage}
          placeholder='Please enter your message...'
        />

        <Button isDarkMode={isDarkMode}>Send Message</Button>
      </form>
      {(!validMessage || !validEmail || !validName) && (
        <div className={classes.ErrorMessages}>
          {!validName && <p>Please enter a valid name!</p>}
          {!validEmail && <p>Please enter a valid email!</p>}
          {!validMessage && (
            <p>Please enter a valid message! message cannot be empty</p>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  message: PropTypes.string,
  nameHandler: PropTypes.func,
  emailHandler: PropTypes.func,
  messageHandler: PropTypes.func,
  validMessage: PropTypes.bool,
  validName: PropTypes.bool,
  validEmail: PropTypes.bool,
  onSubmit: PropTypes.func,
  isDarkMode: PropTypes.bool,
};
