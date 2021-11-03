import { useDispatch, useSelector } from 'react-redux';
import classes from './Settings.module.scss';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { IRootState } from '../../../Interfaces/IState';
import {
  setDarkMode,
  setLeftMenu,
  switchHeaderMenu,
} from '../../../store/Actions/modeActions';

const Settings = () => {
  const dispatch = useDispatch();
  const { darkMode, leftMenu, showHeaderMenu } = useSelector(
    (state: IRootState) => state.mode
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
      {/** Close Animations Setting*/}
      <div className={classes.SettingItem}>
        <label> Animations {leftMenu ? 'Off' : 'On'}</label>
        <ToggleSwitch
          switchCheckHandler={() => console.log('On or Off Animations on Site')}
          isChecked={leftMenu}
        />
      </div>
      {/*The above one will be used for close animations setting */}
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
