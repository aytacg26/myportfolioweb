import { useDispatch, useSelector } from 'react-redux';
import ListItem from '../ListItem/ListItem';

import classes from './SideDrawer.module.css';
import { FaHome, FaWindowClose } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi';
import { BiNetworkChart } from 'react-icons/bi';
import { GiSpiderWeb } from 'react-icons/gi';
import { BsInfoLg } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import {
  setToggleDrawer,
  closeAllMenus,
} from '../../../store/Actions/modeActions';

const menuItems = [
  { id: 'menu-item-0001', text: 'Home', icon: <FaHome />, link: '/' },
  {
    id: 'menu-item-0002',
    text: 'NFT Art',
    icon: <BiNetworkChart />,
    link: '/nft-art',
  },
  {
    id: 'menu-item-0003',
    text: 'Web Portfolio',
    icon: <GiSpiderWeb />,
    link: '/web-portfolio',
  },
  {
    id: 'menu-item-0004',
    text: 'About Me',
    icon: <BsInfoLg />,
    link: '/about',
  },
  {
    id: 'menu-item-0005',
    text: 'Contact Me',
    icon: <AiOutlineMail />,
    link: '/contact',
  },
];

const SideDrawer = () => {
  const { toggleDrawer, leftMenu } = useSelector((state) => state.mode);
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
        {menuItems.map((item) => (
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
