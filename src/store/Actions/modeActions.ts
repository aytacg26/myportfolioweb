import { ModeType } from '../types';
import { AnyAction } from 'redux';
import { IRootState } from '../../Interfaces/IState';
import { ThunkDispatch } from 'redux-thunk';

const setDarkMode = () => {
  return { type: ModeType.DARK_MODE };
};

const setOpenSettings = () => {
  return { type: ModeType.OPEN_SETTINGS };
};

const setToggleDrawer = () => {
  return { type: ModeType.TOGGLE_DRAWER };
};

const setLeftMenu = () => {
  return { type: ModeType.LEFT_MENU };
};

const switchHeaderMenu = () => {
  return { type: ModeType.HEADER_MENU };
};

const closeAllMenus =
  () =>
  (
    dispatch: ThunkDispatch<void, IRootState, AnyAction>,
    getState: () => IRootState
  ) => {
    const {
      mode: { openSettings, toggleDrawer },
    } = getState();

    if (openSettings || toggleDrawer) {
      dispatch({ type: ModeType.CLOSE_ALL });
    } else {
      return;
    }
  };

export {
  setDarkMode,
  setOpenSettings,
  switchHeaderMenu,
  setToggleDrawer,
  setLeftMenu,
  closeAllMenus,
};
