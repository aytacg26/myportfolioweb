import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { IRootState } from '../Interfaces/IState';
import rootReducer from './Reducers';

const initState: IRootState = {
  mode: {
    darkMode: false,
    openSettings: false,
    showHeaderMenu: false,
    toggleDrawer: false,
    leftMenu: false,
  },
  gitHub: {
    repos: null,
    loading: false,
    error: false,
    errorMessage: null,
  },
};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
