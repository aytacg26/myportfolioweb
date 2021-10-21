import React from 'react';
import TextArea from '../../../UI/TextArea/TextArea';
import classes from './ContactForm.module.css';

const ContactForm = ({
  name,
  email,
  message,
  nameHandler,
  emailHandler,
  messageHandler,
  invalidMessage,
  invalidName,
  invalidEmail,
  onSubmit,
  isDarkMode,
}) => {
  return (
    <form onSubmit={onSubmit} className={classes.MessageForm}>
      <input
        type='text'
        maxLength='35'
        minLength='2'
        value={name}
        onChange={nameHandler}
        placeholder='Full Name'
        name='name'
        autoComplete='off'
      />
      <input
        type='email'
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
        maxLength='600'
        counterText='Remaining'
        onChange={messageHandler}
        notValid={invalidMessage}
        placeholder='Please enter your message...'
      />
      <button className={isDarkMode ? classes.darkMode : ''}>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
