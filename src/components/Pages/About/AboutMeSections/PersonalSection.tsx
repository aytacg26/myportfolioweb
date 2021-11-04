import { useState, useEffect } from 'react';
import classes from '../AboutMe.module.scss';
import me from '../../../../Assets/Images/aytac_guley.png';

//TODO : Divide into three parts
const PersonalSection = () => {
  const [moveHeading, setMoveHeading] = useState(false);
  const [rotateImage, setRotateImage] = useState(false);

  useEffect(() => {
    setMoveHeading(true);
    const startRotate = setTimeout(() => {
      setRotateImage(true);
    }, 400);

    return () => clearTimeout(startRotate);
  }, []);

  return (
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
  );
};

export default PersonalSection;
