import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGitHubRepos } from '../../../store/Actions/gitHubActions';
import PresentationSection from '../../UI/PresentationSection/PresentationSection';
import Heading from '../../UI/Heading/Heading';
import Skills from '../../Skills/Skills';
import PersonalSection from './AboutMeSections/PersonalSection';
import AboutMeText from './AboutMeSections/AboutMeText';
import classes from './AboutMe.module.css';
import ProfileBadges from './AboutMeSections/ProfileBadges';
import Github from '../../../Assets/Images/Skills/Github.png';
import GithubLight from '../../../Assets/Images/Skills/GithubLight.png';
import Loader from '../../UI/Loader/Loader';
import RepoItem from '../../UI/RepoItem/RepoItem';
import EntryCard from '../../UI/EntryCard/EntryCard';

const AboutMe = () => {
  const { mode, gitHub } = useSelector((state) => state);
  const { darkMode } = mode;
  const { repos, loading, error, errorMessage } = gitHub;
  const dispatch = useDispatch();

  //Fetch Data from GitHub API
  useEffect(() => {
    if (!repos) {
      dispatch(getGitHubRepos());
    }
  }, [dispatch, repos]);

  return (
    <PresentationSection column>
      <Heading title='Aytaç GÜLEY' />
      <PersonalSection />

      <div className={classes.AboutMeSkills}>
        <Heading title='Skills' />
        <Skills isDarkMode={darkMode} />
      </div>

      <div className={classes.Section}>
        <Heading title='About Me' />
        <AboutMeText />
        <ProfileBadges />
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
        <EntryCard
          heading='Cyprus International University'
          subHeading='Management of Information Systems'
          startYear='2003'
          endYear='2005'
          grade='3.89/4.00'
          location='Nicosia, Cyprus'
        />
        <EntryCard
          heading='Eastern Mediterranean University'
          subHeading='Industrial Engineering'
          startYear='1997'
          endYear='2002'
          grade='3.14/4.00'
          location='Famagusta, Cyprus'
        />
      </div>

      <div className={classes.Section}>
        <Heading title='Certificates' />
      </div>
    </PresentationSection>
  );
};

export default AboutMe;
/**
 *   heading,
  subHeading,
  startYear,
  endYear,
  entryText,
  location,
  grade,
 */
