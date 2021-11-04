import axios from 'axios';
import { AnyAction } from 'redux';
import { GithubType } from '../types';
import { IGitHubState } from '../../Interfaces/IState';
import { ThunkDispatch } from 'redux-thunk';

export const getGitHubRepos =
  () => async (dispatch: ThunkDispatch<void, IGitHubState, AnyAction>) => {
    try {
      dispatch({ type: GithubType.GITHUB_REPO_REQUEST });
      const res = await axios.get(
        'https://api.github.com/users/aytacg26/repos?per_page=10'
      );

      if (res.status === 200) {
        const repos = res.data;

        dispatch({
          type: GithubType.GITHUB_REPO_REQUEST_SUCCESS,
          payload: repos,
        });
      }
    } catch (error) {
      //getErrorMessage(error);
      console.log(error);
      dispatch({
        type: GithubType.GITHUB_REPO_REQUEST_FAIL,
        payload: 'A Message Will Be Created...',
      });
    }
  };
