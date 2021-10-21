import React from 'react';
import classes from '../AboutMe.module.css';
import Badge from '../../../UI/Badge/Badge';
import { FaGithub, FaHackerrank, FaCodepen } from 'react-icons/fa';
import { AiFillCodeSandboxCircle } from 'react-icons/ai';
import { MdOutlineFiberSmartRecord } from 'react-icons/md';

const badgeData = [
  {
    id: 'badge-data-0001',
    title: 'GitHub',
    href: 'https://github.com/aytacg26',
    logoIcon: <FaGithub />,
    badgeColor: '',
  },
  {
    id: 'badge-data-0002',
    title: 'Codepen',
    href: 'https://codepen.io/aytacg26',
    logoIcon: <FaCodepen />,
    badgeColor: '',
  },
  {
    id: 'badge-data-0003',
    title: 'CodeSandbox',
    href: 'https://codesandbox.io/u/aytacg26_9067',
    logoIcon: <AiFillCodeSandboxCircle />,
    badgeColor: '',
  },
  {
    id: 'badge-data-0004',
    title: 'Smartr',
    href: 'https://www.smartr.me/public/profiles/aytac.guley',
    logoIcon: <MdOutlineFiberSmartRecord />,
    badgeColor: '#57B4A9',
  },
  {
    id: 'badge-data-0005',
    title: 'Hackerrank',
    href: 'https://www.hackerrank.com/aytacg26',
    logoIcon: <FaHackerrank />,
    badgeColor: '',
  },
];

const ProfileBadges = () => {
  return (
    <div className={classes.BagdeSection}>
      {badgeData.map((badge) => (
        <Badge {...badge} key={badge.id} />
      ))}
    </div>
  );
};

export default ProfileBadges;
