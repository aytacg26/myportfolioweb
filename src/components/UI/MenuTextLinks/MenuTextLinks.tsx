import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import links from '../../../Data/MenuData';

//create link data folder and use map
const MenuTextLinks = () => {
  return (
    <Fragment>
      {links.map((link) => (
        <Link to={link.link} key={link.id}>
          {link.text}
        </Link>
      ))}
    </Fragment>
  );
};

export default MenuTextLinks;
