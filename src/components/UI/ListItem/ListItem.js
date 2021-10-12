import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './ListItem.module.css';

const ListItem = ({ link, itemText, icon, showText, onClick }) => {
  const location = useLocation();
  let listContainerClass;

  if (showText) {
    listContainerClass =
      location.pathname === link
        ? `${classes.ListItemContainer} ${classes.current}`
        : classes.ListItemContainer;
  } else {
    listContainerClass = classes.ListItemIconContainer;
  }

  return (
    <div className={classes.ListItem} title={itemText} onClick={onClick}>
      <Link to={link}>
        <div className={listContainerClass}>
          <span>{icon}</span>
          {showText && <span className={classes.ListText}>{itemText}</span>}
        </div>
      </Link>
    </div>
  );
};

ListItem.defalutProps = {
  link: '/',
  itemText: 'Home',
};

export default ListItem;
