import classes from '../AboutMe.module.scss';
import Badge from '../../../UI/Badge/Badge';
import { badgeData } from '../../../../Data/MenuData';

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
