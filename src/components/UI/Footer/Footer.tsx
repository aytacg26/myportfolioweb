import React from 'react';
import logo from '../../../Assets/Images/dKlassix_logoX.png';
import classes from './Footer.module.scss';
import MenuTextLinks from '../MenuTextLinks/MenuTextLinks';
import SocialIcon from './SocialIcon/SocialIcon';
import instagram from '../../../Assets/Images/instagram.png';
import facebook from '../../../Assets/Images/facebook.png';
import twitter from '../../../Assets/Images/twitter.png';
import rarible from '../../../Assets/Images/rarible.png';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={classes.FooterContainer}>
      <Fade className={classes.Fade} triggerOnce delay={200}>
        <div className={classes.ImageSection}>
          <img src={logo} alt='dKlassix Logo' title="Aytac Guley's Portfolio" />
          <div className={classes.socialLinks}>
            <SocialIcon
              title='My Instagram Profile'
              link='https://www.instagram.com/aytacguley80/'
              image={instagram}
            />
            <SocialIcon
              title='My Facebook Profile'
              link='https://www.facebook.com/aytac.guley666/'
              image={facebook}
            />
            <SocialIcon
              title='My Twitter Profile'
              link='https://twitter.com/aytacg26'
              image={twitter}
            />
            <SocialIcon
              title='My Rarible Profile'
              link='https://rarible.com/aytacguley'
              image={rarible}
            />
          </div>
        </div>
      </Fade>
      <div className={classes.Links}>
        <MenuTextLinks />
      </div>
      <div className={classes.copyRight}>
        &copy; {year} Aytac GULEY, Nicosia, Cyprus, All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
