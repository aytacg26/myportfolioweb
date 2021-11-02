import { combineReducers } from 'redux';
import modeReducer from './ModeReducer/modeReducer';
import gitHubReducer from './GithubReducer/gitHubReducer';

const rootReducer = combineReducers({
  mode: modeReducer,
  gitHub: gitHubReducer,
});

export default rootReducer;
