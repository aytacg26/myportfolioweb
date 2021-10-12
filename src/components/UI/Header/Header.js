import { useDispatch } from 'react-redux';
import classes from './Header.module.css';
import logo from '../../../Assets/Images/dKlassix_logoX.png';
import { Link } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import { FaCog } from 'react-icons/fa';
import {
  setToggleDrawer,
  setOpenSettings,
} from '../../../store/Actions/modeActions';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className={classes.headerContainer}>
      <Link to='/'>
        <div className={classes['header-logo']}>
          <img src={logo} alt='dKlassix Logo' title="Aytac Guley's Portfolio" />
        </div>
      </Link>
      <h2>Aytac Guley's Portfolio</h2>
      <div className={classes.LeftIcons}>
        <HiOutlineMenu
          title='Menu'
          onClick={() => dispatch(setToggleDrawer())}
        />
        <FaCog title='Settings' onClick={() => dispatch(setOpenSettings())} />
      </div>
    </header>
  );
};

export default Header;
