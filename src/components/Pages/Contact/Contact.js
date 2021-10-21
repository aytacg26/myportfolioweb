import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { validateName, validateEmail } from '../../../Utils/Utils';
import { GiSelfLove } from 'react-icons/gi';
import { ImLocation2 } from 'react-icons/im';
import { MdPhoneAndroid, MdEmail } from 'react-icons/md';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';

import ContactForm from './ContactForm/ContactForm';
import classes from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidMessage, setIsValidMessage] = useState(false);

  const { darkMode } = useSelector((state) => state.mode);

  const { name, email, message } = formData;

  const formDataHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={classes.ContactContainer}>
      <div className={`${classes.Headings} ${darkMode && classes.darkMode}`}>
        <h1>Contact</h1>
        <h3>
          I'd <GiSelfLove style={{ color: darkMode && 'red' }} /> to be in
          touch!
        </h3>
        <h5>
          I like to create things with fun, open minded people. Feel free to say
          hello!
        </h5>
      </div>
      <div className={classes.ContactSection}>
        <div>
          <ContactForm
            name={name}
            email={email}
            message={message}
            nameHandler={formDataHandler}
            emailHandler={formDataHandler}
            messageHandler={formDataHandler}
            onSubmit={formSubmitHandler}
            isDarkMode={darkMode}
            invalidMessage={isValidMessage}
            invalidName={isValidName}
            invalidEmail={isValidEmail}
          />
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
/**
  name,
  email,
  message,
  nameHandler,
  emailHandler,
  messageHandler,
  invalidMessage,
  invalidName,
  invalidEmail,
 */
