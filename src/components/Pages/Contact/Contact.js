import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  validateName,
  validateEmail,
  validateMessage,
} from '../../../Utils/Utils';
import { GiSelfLove } from 'react-icons/gi';
import { ImLocation2 } from 'react-icons/im';
import { MdPhoneAndroid, MdEmail } from 'react-icons/md';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';

import ContactForm from './ContactForm/ContactForm';
import classes from './Contact.module.css';

const messages = [
  'I like to create things with fun, open minded people. Feel free to say hello!',
  'Whether you have a question about me or anything else, I will be happy to answer!',
  "Let's work together to create game-changing experiences.",
  "You're about to take the first step towards contacting me! Here are few ways to to reach out to me.",
];

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidMessage, setIsValidMessage] = useState(true);
  const [contactHeading, setContactHeading] = useState(0);
  const [messageSend, setMessageSend] = useState(false);

  const { darkMode } = useSelector((state) => state.mode);

  /*@TODO :
    -check validation onBlur
    
    -validations must be false initially, check if user enters a input and leaves it empty
    then run the error mechanism

    -validation in entryHandlers will be dependent to another state, therefore
    we need to use useReducer instead of multiple useStates and validation functions
    must be used in enteryHandlers before setting validations to true.

    - After completion of backend, connect this component to redux

    - create a message send component and whenever message send successfully,
    the form will be cleared, and for 6 seconds, message send component will take place
    instead of ContactForm component.

    -Divide this component into multiple parts if it is possible, it seems a little bit long!
  */

  useEffect(() => {
    const headingIndex = Math.floor(Math.random() * 4);
    setContactHeading(headingIndex);
  }, []);

  useEffect(() => {
    if (messageSend) {
      setTimeout(() => {
        setMessageSend(false);
      }, 6000);
    }
  }, [messageSend]);

  const nameEntryHandler = (e) => {
    setName(e.target.value);
    setIsValidName(true);
  };
  const emailEntryHandler = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
  };
  const messageEntryHandler = (e) => {
    setMessage(e.target.value);
    setIsValidMessage(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    //Validation
    const validName = validateName(name);
    const validEmail = validateEmail(email);
    const validMessage = validateMessage(message);

    if (validName && validEmail && validMessage.isValid) {
      setIsValidEmail(true);
      setIsValidMessage(true);
      setIsValidName(true);

      const message = { name, email, message: validMessage.message };

      setName('');
      setEmail('');
      setMessage('');
      setMessageSend(true);

      console.log(message);
    } else {
      setIsValidName(validName);
      setIsValidEmail(validEmail);
      setIsValidMessage(validMessage.isValid);
      console.log(validName);
      console.log(validEmail);
      console.log(validMessage);
    }
  };

  return (
    <div className={classes.ContactContainer}>
      <div className={`${classes.Headings} ${darkMode && classes.darkMode}`}>
        <h1>Contact</h1>
        <h3>
          I'd <GiSelfLove style={{ color: darkMode && 'red' }} /> to be in
          touch!
        </h3>
        <h5>{messages[contactHeading]}</h5>
      </div>
      <div className={classes.ContactSection}>
        <div>
          {!messageSend && (
            <ContactForm
              name={name}
              email={email}
              message={message}
              nameHandler={nameEntryHandler}
              emailHandler={emailEntryHandler}
              messageHandler={messageEntryHandler}
              onSubmit={formSubmitHandler}
              isDarkMode={darkMode}
              validMessage={isValidMessage}
              validName={isValidName}
              validEmail={isValidEmail}
            />
          )}
          {messageSend && (
            <p>
              You message send successfully, I will be in touch with you within
              1000 years... create a success and/or error component, in case of
              any server error, error will take place and this time, form
              shouldn't be emptied!!
            </p>
          )}
        </div>
        <div className={classes.ContactDetailsContainer}>
          <div
            className={`${classes.ContactDetails} ${
              darkMode && classes.darkMode
            }`}
          >
            <div className={classes.ContactDataGroup}>
              <ImLocation2
                style={{ color: darkMode ? 'yellowgreen' : 'rgb(0, 102, 255)' }}
              />
              <span>Nicosia, Cyprus</span>
            </div>
            <div className={classes.ContactDataGroup}>
              <MdPhoneAndroid
                style={{ color: darkMode ? 'yellowgreen' : 'rgb(0, 102, 255)' }}
              />
              <span>+90 548 888 88 26</span>
            </div>
            <div className={classes.ContactDataGroup}>
              <MdEmail
                style={{ color: darkMode ? 'yellowgreen' : 'rgb(0, 102, 255)' }}
              />
              <span>aytacguley(at)dklassix(dot)com</span>
            </div>
          </div>
          <div className={`${classes.Social} ${darkMode && classes.darkMode}`}>
            <a
              href='https://www.facebook.com/aytac.guley666/'
              title='Aytac Guley Facebook'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsFacebook />
            </a>
            <a
              href='https://twitter.com/aytacg26'
              title='Aytac Guley Twitter'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsTwitter />
            </a>
            <a
              href='https://www.instagram.com/aytacguley80/'
              title='Aytac Guley Instagram'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsInstagram />
            </a>
            <a
              href='https://www.linkedin.com/in/aytacguley/'
              title='Aytac Guley LinkedIn'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
