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
        <AboutMeText isDarkMode={darkMode} />
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
          isDarkMode={darkMode}
        />
        <EntryCard
          heading='Eastern Mediterranean University'
          subHeading='Industrial Engineering'
          startYear='1997'
          endYear='2002'
          grade='3.14/4.00'
          location='Famagusta, Cyprus'
          isDarkMode={darkMode}
        />
      </div>
      <div className={classes.Section}>
        <Heading title='Experience' />
        <EntryCard
          heading='Provident Fund'
          subHeading='Frontend Developer'
          startYear='04/2014'
          location='Nicosia, Cyprus'
          entryText='Mainly, responsible from the frontend designs of the website, e-services for employers and e-services for
          employees and project presentation website. In this time period, I have completed all projects before the
          given deadline dates. For 3 of the projects, I have used Javascript, JQuery and ASP.NET WebApi &amp;
          ASP.NET MVC. As desktop projects, I have completed 3 projects which has increased the efficiency and
          work performance of inspection department of provident fund.'
          isDarkMode={darkMode}
        />
        <EntryCard
          heading='Semka Co. Ltd'
          subHeading='Marketing Personnel'
          startYear='12/2010'
          endYear='05/2011'
          location='Nicosia, Cyprus'
          entryText='I was responsible from solving problems and gathering requests of the customers in Famagusta, apart from
          existing customers, I was responsible from finding new customers and attending meetings with the construction companies 
          of new projects. '
        />
        <EntryCard
          heading='Özerk Co. Ltd'
          subHeading='Branch Manager'
          startYear='06/2010'
          endYear='11/2010'
          location='Nicosia, Cyprus'
          entryText='I was responsible from assessing budget and stock plans and management of branch personnal'
        />
        <EntryCard
          heading='YAR Ltd'
          subHeading='Import Analyst'
          startYear='05/2009'
          endYear='05/2010'
          entryText='Assited compliance department in performing internal audits of processes and systems to facilitate
          importation and exportation of products. Creating and transmitting accurate documentation to gorvenment
          agencies for all import activities.'
        />
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
