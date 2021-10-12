import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Settings.module.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { setDarkMode, setLeftMenu } from '../../../store/Actions/modeActions';

const Settings = () => {
  const dispatch = useDispatch();
  const { darkMode, leftMenu } = useSelector((state) => state.mode);

  const darkModeSwitchHandler = () => {
    dispatch(setDarkMode());
  };

  const leftMenuSwitchHandler = () => {
    dispatch(setLeftMenu());
  };

  return (
    <div className={classes.SettingsContainer}>
      <div className={classes.SettingItem}>
        <label>Dark Mode</label>
        <ToggleSwitch
          switchCheckHandler={darkModeSwitchHandler}
          isChecked={darkMode}
        />
      </div>
      <div className={classes.SettingItem}>
        <label>Show Left Menu</label>
        <ToggleSwitch
          switchCheckHandler={leftMenuSwitchHandler}
          isChecked={leftMenu}
        />
      </div>
    </div>
  );
};

export default Settings;
