import classes from './RepoItem.module.scss';
import { MdOutlinePublic } from 'react-icons/md';
import { formatDate } from '../../../Utils/Utils';
import PropTypes from 'prop-types';

interface IProps {
  repo: {
    id: string;
    html_url: string;
    name: string;
    language: string;
    pushed_at: string;
    visibility: string;
    [key: string]: any;
  };
}

//TODO : Refactor this Component
const RepoItem = ({ repo }: IProps) => {
  return (
    <li key={repo.id} className={classes.ListItem}>
      <a
        href={repo.html_url}
        target='_blank'
        rel='noopener noreferrer'
        title={repo.name}
      >
        <div className={classes.RepoContainer}>
          <div className={classes.RepoDataGroup}>
            <label>Repo Name</label>
            <span>{repo.name}</span>
          </div>
          <div className={classes.RepoDataGroup}>
            <label>Language</label>
            <span>{repo.language}</span>
          </div>
          <div className={classes.RepoDataGroup}>
            <label>Pushed At</label>
            <span>{formatDate(repo.pushed_at)}</span>
          </div>
          <div className={classes.RepoVisibility}>
            {repo.visibility} <MdOutlinePublic />
          </div>
        </div>
      </a>
    </li>
  );
};

export default RepoItem;

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

RepoItem.defaultProps = {
  repo: {
    id: '0000000001',
    html_url: '',
    name: '',
    language: '',
    pushed_at: '',
    visibility: '',
  },
};
