import { gitHubAction } from '../../../Types/ReduxTypes';
import { GithubType } from '../../types';
import { IGitHubState } from '../../../Interfaces/IState';

const initState = {
  repos: null,
  loading: false,
  error: false,
  errorMessage: null,
};

const gitHubReducer = (
  state: IGitHubState = initState,
  action: gitHubAction
) => {
  const { type, payload } = action;

  switch (type) {
    case GithubType.GITHUB_REPO_REQUEST:
      return { ...state, loading: true, error: false, errorMessage: null };
    case GithubType.GITHUB_REPO_REQUEST_SUCCESS:
      return {
        repos: payload,
        loading: false,
        error: false,
        errorMessage: null,
      };
    case GithubType.GITHUB_REPO_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: payload,
      };

    default:
      return state;
  }
};

export default gitHubReducer;
