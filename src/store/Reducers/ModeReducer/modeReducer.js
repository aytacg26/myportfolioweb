import {
  DARK_MODE,
  OPEN_SETTINGS,
  TOGGLE_DRAWER,
  LEFT_MENU,
  CLOSE_ALL,
} from '../../types';

const initState = {
  darkMode: false,
  openSettings: false,
  toggleDrawer: false,
  leftMenu: false,
};

const modeReducer = (state = initState, action) => {
  const { type } = action;

  switch (type) {
    case DARK_MODE:
      return { ...state, darkMode: !state.darkMode };

    case OPEN_SETTINGS:
      return {
        ...state,
        openSettings: !state.openSettings,
        toggleDrawer: false,
      };

    case TOGGLE_DRAWER:
      return {
        ...state,
        toggleDrawer: !state.toggleDrawer,
        openSettings: false,
      };

    case LEFT_MENU:
      return { ...state, leftMenu: !state.leftMenu };

    case CLOSE_ALL:
      return { ...state, openSettings: false, toggleDrawer: false };

    default:
      return state;
  }
};

export default modeReducer;
