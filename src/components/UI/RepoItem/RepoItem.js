import React from 'react';
import classes from './RepoItem.module.css';
import { MdOutlinePublic } from 'react-icons/md';
import { formatDate } from '../../../Utils/Utils';

const RepoItem = ({ repo }) => {
  return (
    <li key={repo.id} className={classes.ListItem}>
      <a
        href={repo.html_url}
        target='_blank'
        rel='noopener noreferrer'
        alt={repo.name}
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
