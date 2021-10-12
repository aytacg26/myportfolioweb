import axios from 'axios';
import {
  GITHUB_REPO_REQUEST_FAIL,
  GITHUB_REPO_REQUEST,
  GITHUB_REPO_REQUEST_SUCCESS,
} from '../types';

export const getGitHubRepos = () => async (dispatch) => {
  try {
    dispatch({ type: GITHUB_REPO_REQUEST });
    const res = await axios.get(
      'https://api.github.com/users/aytacg26/repos?per_page=10'
    );

    if (res.status === 200) {
      const repos = res.data;

      dispatch({ type: GITHUB_REPO_REQUEST_SUCCESS, payload: repos });
    }
  } catch (error) {
    //getErrorMessage(error);
    console.log(error);
    dispatch({
      type: GITHUB_REPO_REQUEST_FAIL,
      payload: 'A Message Will Be Created...',
    });
  }
};
