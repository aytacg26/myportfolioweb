export interface IModeState {
  darkMode: boolean;
  openSettings: boolean;
  showHeaderMenu: boolean;
  toggleDrawer: boolean;
  leftMenu: boolean;
}

export interface IGitHubState {
  repos: any;
  loading: boolean;
  error: boolean;
  errorMessage: string | null;
}

export interface IRootState {
  mode: IModeState;
  gitHub: IGitHubState;
}
