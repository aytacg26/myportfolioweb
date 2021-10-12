import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGitHubRepos } from '../../../store/Actions/gitHubActions';
import { FaGithub, FaHackerrank, FaCodepen } from 'react-icons/fa';
import { AiFillCodeSandboxCircle } from 'react-icons/ai';
import { MdOutlineFiberSmartRecord } from 'react-icons/md';
import PresentationSection from '../../UI/PresentationSection/PresentationSection';
import Heading from '../../UI/Heading/Heading';
import Skills from '../../Skills/Skills';
import classes from './AboutMe.module.css';
import me from '../../../Assets/Images/aytac_guley.png';
import Github from '../../../Assets/Images/Skills/Github.png';
import GithubLight from '../../../Assets/Images/Skills/GithubLight.png';
import Loader from '../../UI/Loader/Loader';
import RepoItem from '../../UI/RepoItem/RepoItem';
import Badge from '../../UI/Badge/Badge';

const AboutMe = () => {
  const [moveHeading, setMoveHeading] = useState(false);
  const [rotateImage, setRotateImage] = useState(false);
  const { mode, gitHub } = useSelector((state) => state);
  const { darkMode } = mode;
  const { repos, loading, error, errorMessage } = gitHub;
  const dispatch = useDispatch();

  //Animations
  useEffect(() => {
    setMoveHeading(true);
    const startRotate = setTimeout(() => {
      setRotateImage(true);
    }, 400);

    return () => clearTimeout(startRotate);
  }, []);

  //Fetch Data from GitHub API
  useEffect(() => {
    dispatch(getGitHubRepos());
  }, [dispatch]);

  return (
    <PresentationSection column>
      <Heading title='Aytaç GÜLEY' />
      <div className={classes.AboutMeJob}>
        <div className={`${classes.Me} ${rotateImage ? classes.Rotate : ''}`}>
          <img src={me} alt='Aytac Guley' title='Aytac guley' />
        </div>

        <div
          className={`${classes.Headings} ${moveHeading ? classes.MoveIn : ''}`}
        >
          <h3>
            <span className={classes.Huge}>F</span>rontend{' '}
            <span className={classes.Huge}>R</span>eact{' '}
            <span className={classes.Huge}>D</span>eveloper &amp;{' '}
            <span className={classes.Huge}>J</span>avaScript Enthusiast
          </h3>
          <h3>Blender 3D Artist</h3>
          <h4>Nicosia, Cyprus</h4>
        </div>
      </div>
      <div className={classes.AboutMeSkills}>
        <Heading title='Skills' />
        <Skills isDarkMode={darkMode} />
      </div>

      <div className={classes.Section}>
        <Heading title='About Me' />
        <p>
          <span className={classes.Huge}>S</span>ince 2013, I have been studying
          computer science and programming languages. My programming languages
          journey started with C++, then I moved to python and C#. In my
          university years, I was using HTML, CSS, and JavaScript for simple
          landing websites and from those years and because of the initial
          nature of JavaScript, I have never think JS as a programming language
          to create something but it was just a language to create interactivity
          and simple animations on the web. After my first project in 2014, I
          realized that JavaScript is more than that and started to study it in
          more detail. Currently, I am a JavaScript Enthusiast and I love
          working on any kind of JavaScript-based library, package, and
          framework. From Frontend to Backend, I mostly prefer to use and learn
          JavaScript-based technologies.
        </p>
        <div className={classes.BagdeSection}>
          <Badge
            title='Github'
            href='https://github.com/aytacg26'
            logoIcon={<FaGithub />}
          />
          <Badge
            title='Codepen'
            href='https://codepen.io/aytacg26'
            logoIcon={<FaCodepen />}
          />
          <Badge
            title='CodeSandbox'
            href='https://codesandbox.io/u/aytacg26_9067'
            logoIcon={<AiFillCodeSandboxCircle />}
          />
          <Badge
            title='Smartr'
            href='https://www.smartr.me/public/profiles/aytac.guley'
            logoIcon={<MdOutlineFiberSmartRecord />}
            badgeColor='#57B4A9'
          />
          <Badge
            title='Hackerrank'
            href='https://www.hackerrank.com/aytacg26'
            logoIcon={<FaHackerrank />}
          />
        </div>
      </div>

      <div className={classes.Section}>
        <Heading title='GitHub Repos' />
        <div
          className={classes.GitHubContainer}
          style={{ backgroundColor: darkMode ? '#fff' : '#323233' }}
        >
          <a
            href='https://github.com/aytacg26'
            title="Aytac Guley's GitHub"
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={darkMode ? Github : GithubLight}
              alt='GitHub Logo'
              title='GitHub'
            />
            <h3 style={{ color: darkMode ? '#323233' : '#8e8e8e' }}>
              Visit My GitHub
            </h3>
          </a>
        </div>
        <div className={classes.GitHubRepos}>
          {loading && <Loader />}
          {error && !loading && (
            <h5 style={{ color: 'red' }}>{errorMessage}</h5>
          )}
          {repos && (
            <div className={classes.GitHubReposList}>
              <ul>
                {repos.map((repo) => (
                  <RepoItem repo={repo} key={repo.id} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className={classes.Section}>
        <Heading title='Education' />
      </div>

      <div className={classes.Section}>
        <Heading title='Certificates' />
      </div>
    </PresentationSection>
  );
};

export default AboutMe;
