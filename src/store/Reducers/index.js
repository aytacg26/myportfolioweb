import { combineReducers } from 'redux';
import modeReducer from './ModeReducer/modeReducer';
import gitHubReducer from './GithubReducer/gitHubReducer';

export default combineReducers({
  mode: modeReducer,
  gitHub: gitHubReducer,
});
