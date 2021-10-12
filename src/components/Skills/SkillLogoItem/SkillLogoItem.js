import React from 'react';
import classes from './SkillLogoItem.module.css';
import { useSelector } from 'react-redux';

const SkillLogoItem = ({ logo, title }) => {
  const { darkMode } = useSelector((state) => state.mode);

  return (
    <div
      className={classes.skillLogoContainer}
      style={{ backgroundColor: darkMode ? '#fff' : '#f5f5f5' }}
    >
      {logo && (
        <img src={logo} alt={title} title={title} width='38' height='38' />
      )}
    </div>
  );
};

//small but in skills part at least 20 times will be called
export default React.memo(SkillLogoItem);
