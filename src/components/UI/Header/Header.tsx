import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.scss';
import logo from '../../../Assets/Images/dKlassix_logoX.png';
import { Link } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import { FaCog } from 'react-icons/fa';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import {
  setToggleDrawer,
  setOpenSettings,
} from '../../../store/Actions/modeActions';
import { IRootState } from '../../../Interfaces/IState';

const Header = () => {
  const dispatch = useDispatch();
  const { showHeaderMenu } = useSelector((state: IRootState) => state.mode);

  return (
    <header className={classes.headerContainer}>
      <Link to='/'>
        <div className={classes['header-logo']}>
          <img src={logo} alt='dKlassix Logo' title="Aytac Guley's Portfolio" />
        </div>
      </Link>
      <h2>Aytac Guley's Portfolio</h2>
      <div className={classes.LeftIcons}>
        {showHeaderMenu && <HeaderMenu />}
        <HiOutlineMenu
          title='Menu'
          onClick={() => dispatch(setToggleDrawer())}
          className={classes.HeaderIcon}
        />
        <FaCog
          title='Settings'
          onClick={() => dispatch(setOpenSettings())}
          className={classes.HeaderIcon}
        />
      </div>
    </header>
  );
};

export default Header;
