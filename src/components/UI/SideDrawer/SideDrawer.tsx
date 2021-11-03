import { useDispatch, useSelector } from 'react-redux';
import ListItem from '../ListItem/ListItem';
import classes from './SideDrawer.module.scss';
import { FaWindowClose } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi';
import links from '../../../Data/MenuData';
import { IRootState } from '../../../Interfaces/IState';
import {
  setToggleDrawer,
  closeAllMenus,
} from '../../../store/Actions/modeActions';

const SideDrawer = () => {
  const { toggleDrawer, leftMenu } = useSelector(
    (state: IRootState) => state.mode
  );
  const dispatch = useDispatch();
  const sideDrawerClass = toggleDrawer
    ? `${classes.SideDrawerContainer} ${classes.Open}`
    : classes.SideDrawerContainer;

  return (
    <div
      className={sideDrawerClass}
      style={{ left: leftMenu ? 0 : toggleDrawer ? 0 : -45 }}
    >
      <div className={classes.ListItems}>
        {links.map((item) => (
          <ListItem
            key={item.id}
            link={item.link}
            itemText={item.text}
            icon={item.icon}
            showText={toggleDrawer}
            onClick={() => dispatch(closeAllMenus())}
          />
        ))}
      </div>
      <div
        className={classes.MenuIconContainer}
        onClick={() => dispatch(setToggleDrawer())}
        style={{ justifyContent: !toggleDrawer ? 'center' : '' }}
      >
        {toggleDrawer ? (
          <FaWindowClose />
        ) : (
          <HiOutlineMenu style={{ fontSize: 20 }} />
        )}
        {toggleDrawer && <span>Close Menu</span>}
      </div>
    </div>
  );
};

export default SideDrawer;
