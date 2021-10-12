import {
  GITHUB_REPO_REQUEST_FAIL,
  GITHUB_REPO_REQUEST,
  GITHUB_REPO_REQUEST_SUCCESS,
} from '../../types';

const initState = {
  repos: null,
  loading: false,
  error: false,
  errorMessage: null,
};

const gitHubReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GITHUB_REPO_REQUEST:
      return { ...state, loading: true, error: false, errorMessage: null };
    case GITHUB_REPO_REQUEST_SUCCESS:
      return {
        repos: payload,
        loading: false,
        error: false,
        errorMessage: null,
      };
    case GITHUB_REPO_REQUEST_FAIL:
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
