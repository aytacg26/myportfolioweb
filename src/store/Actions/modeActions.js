import {
  DARK_MODE,
  OPEN_SETTINGS,
  TOGGLE_DRAWER,
  LEFT_MENU,
  CLOSE_ALL,
} from '../types';

const setDarkMode = () => {
  return { type: DARK_MODE };
};

const setOpenSettings = () => {
  return { type: OPEN_SETTINGS };
};

const setToggleDrawer = () => {
  return { type: TOGGLE_DRAWER };
};

const setLeftMenu = () => {
  return { type: LEFT_MENU };
};

const closeAllMenus = () => (dispatch, getState) => {
  const {
    mode: { openSettings, toggleDrawer },
  } = getState();

  if (openSettings || toggleDrawer) {
    dispatch({ type: CLOSE_ALL });
  } else {
    return;
  }
};

export {
  setDarkMode,
  setOpenSettings,
  setToggleDrawer,
  setLeftMenu,
  closeAllMenus,
};
