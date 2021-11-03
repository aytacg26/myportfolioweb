import { FaHome } from 'react-icons/fa';
import { BiNetworkChart } from 'react-icons/bi';
import { GiSpiderWeb } from 'react-icons/gi';
import { BsInfoLg } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const links = Object.freeze([
  {
    id: 'menu-link-0001',
    text: 'Home',
    link: '/',
    icon: <FaHome />,
  },
  {
    id: 'menu-link-0002',
    text: 'NFT Art',
    link: '/nft-art',
    icon: <BiNetworkChart />,
  },
  {
    id: 'menu-link-0003',
    text: 'Web Portfolio',
    link: '/web-portfolio',
    icon: <GiSpiderWeb />,
  },
  {
    id: 'menu-link-0004',
    text: 'About Me',
    link: '/about',
    icon: <BsInfoLg />,
  },
  {
    id: 'menu-link-0005',
    text: 'Contact Me',
    link: '/contact',
    icon: <AiOutlineMail />,
  },
]);

export default links;

/**
   * const menuItems = [
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

   */
