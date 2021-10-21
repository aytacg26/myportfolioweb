import React, { Fragment } from 'react';
import TextArea from '../../../UI/TextArea/TextArea';
import classes from './ContactForm.module.css';

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
}) => {
  return (
    <Fragment>
      <form onSubmit={onSubmit} className={classes.MessageForm}>
        <input
          type='text'
          value={name}
          onChange={nameHandler}
          placeholder='Full Name'
          name='name'
          autoComplete='off'
          className={`${!validName && classes.invalidInput}`}
        />
        <input
          type='text'
          value={email}
          onChange={emailHandler}
          placeholder='Email'
          name='email'
          autoComplete='off'
          className={`${!validEmail && classes.invalidInput}`}
        />
        <TextArea
          name='message'
          value={message}
          showCounter
          maxLength='600'
          counterText='Remaining'
          onChange={messageHandler}
          notValid={!validMessage}
          placeholder='Please enter your message...'
        />
        <button className={isDarkMode ? classes.darkMode : ''}>
          Send Message
        </button>
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
