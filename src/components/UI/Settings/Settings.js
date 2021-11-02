import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Settings.module.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import {
  setDarkMode,
  setLeftMenu,
  switchHeaderMenu,
} from '../../../store/Actions/modeActions';

const Settings = () => {
  const dispatch = useDispatch();
  const { darkMode, leftMenu, showHeaderMenu } = useSelector(
    (state) => state.mode
  );

  const darkModeSwitchHandler = () => {
    dispatch(setDarkMode());
  };

  const leftMenuSwitchHandler = () => {
    dispatch(setLeftMenu());
  };

  const headerMenuSwitchHandler = () => {
    dispatch(switchHeaderMenu());
  };

  return (
    <div className={classes.SettingsContainer}>
      <div className={classes.SettingItem}>
        <label>{!darkMode ? 'Light' : 'Dark'} Mode</label>
        <ToggleSwitch
          switchCheckHandler={darkModeSwitchHandler}
          isChecked={darkMode}
        />
      </div>
      <div className={classes.SettingItem}>
        <label>{leftMenu ? 'Hide' : 'Show'} Left Menu</label>
        <ToggleSwitch
          switchCheckHandler={leftMenuSwitchHandler}
          isChecked={leftMenu}
        />
      </div>
      <div className={`${classes.SettingItem} ${classes.HeaderMenuSwitch}`}>
        <label>{showHeaderMenu ? 'Hide' : 'Show'} Header Menu</label>
        <ToggleSwitch
          switchCheckHandler={headerMenuSwitchHandler}
          isChecked={showHeaderMenu}
        />
      </div>
    </div>
  );
};

export default Settings;
