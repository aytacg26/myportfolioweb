import React from 'react';
import classes from '../AboutMe.module.scss';
import PropTypes from 'prop-types';

interface IProps {
  isDarkMode?: boolean;
}

const AboutMeText = ({ isDarkMode }: IProps) => {
  return (
    <p style={{ color: isDarkMode ? '#fff' : '#000000' }}>
      <span
        className={classes.Huge}
        style={{ color: isDarkMode ? 'red' : '#000000' }}
      >
        S
      </span>
      ince 2013, I have been studying computer science and programming
      languages. My programming languages journey started with C++, then I moved
      to python and C#. In my university years, I was using HTML, CSS, and
      JavaScript for simple landing websites and from those years and because of
      the initial nature of JavaScript, I have never think JS as a programming
      language to create something but it was just a language to create
      interactivity and simple animations on the web. After my first project in
      2014, I realized that JavaScript is more than that and started to study it
      in more detail. Currently, I am a JavaScript Enthusiast and I love working
      on any kind of JavaScript-based library, package, and framework. From
      Frontend to Backend, I mostly prefer to use and learn JavaScript-based
      technologies.
    </p>
  );
};

export default AboutMeText;

AboutMeText.propTypes = {
  isDarkMode: PropTypes.bool,
};

AboutMeText.defaultProps = {
  isDarkMode: false,
};
