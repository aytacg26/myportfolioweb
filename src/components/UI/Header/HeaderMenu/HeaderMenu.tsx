import React from 'react';
import MenuTextLinks from '../../MenuTextLinks/MenuTextLinks';
import classes from './HeaderMenu.module.scss';

const HeaderMenu = () => {
  return (
    <div className={classes.HeaderMenuContainer}>
      <MenuTextLinks />
    </div>
  );
};

export default HeaderMenu;
