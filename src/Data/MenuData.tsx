import { FaHome } from 'react-icons/fa';
import { BiNetworkChart } from 'react-icons/bi';
import { GiSpiderWeb } from 'react-icons/gi';
import { BsInfoLg } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaHackerrank, FaCodepen } from 'react-icons/fa';
import { AiFillCodeSandboxCircle } from 'react-icons/ai';
import { MdOutlineFiberSmartRecord } from 'react-icons/md';

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

export const badgeData = [
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

export default links;
