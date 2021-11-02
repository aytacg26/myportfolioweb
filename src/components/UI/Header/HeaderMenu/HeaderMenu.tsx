import React from 'react';
import { Link } from 'react-router-dom';
import classes from './HeaderMenu.module.scss';

const HeaderMenu = () => {
  return (
    <div className={classes.HeaderMenuContainer}>
      <Link to='/'>Home</Link>
      <Link to='/nft-art'>NFT Art</Link>
      <Link to='/web-portfolio'>Web Portfolio</Link>
      <Link to='/about'>About Me</Link>
      <Link to='/contact'>Contact Me</Link>
    </div>
  );
};

export default HeaderMenu;
