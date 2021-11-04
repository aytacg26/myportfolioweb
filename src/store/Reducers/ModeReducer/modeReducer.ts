import { IModeState } from '../../../Interfaces/IState';
import { modeAction } from '../../../Types/ReduxTypes';
import { ModeType } from '../../types';

const initState = {
  darkMode: false,
  openSettings: false,
  showHeaderMenu: false,
  toggleDrawer: false,
  leftMenu: false,
};

const modeReducer = (state: IModeState = initState, action: modeAction) => {
  const { type } = action;

  switch (type) {
    case ModeType.DARK_MODE:
      return { ...state, darkMode: !state.darkMode };

    case ModeType.OPEN_SETTINGS:
      return {
        ...state,
        openSettings: !state.openSettings,
        toggleDrawer: false,
      };

    case ModeType.HEADER_MENU:
      return { ...state, showHeaderMenu: !state.showHeaderMenu };

    case ModeType.TOGGLE_DRAWER:
      return {
        ...state,
        toggleDrawer: !state.toggleDrawer,
        openSettings: false,
      };

    case ModeType.LEFT_MENU:
      return { ...state, leftMenu: !state.leftMenu };

    case ModeType.CLOSE_ALL:
      return { ...state, openSettings: false, toggleDrawer: false };

    default:
      return state;
  }
};

export default modeReducer;
