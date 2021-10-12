import React from 'react';
import PhotoShop from '../../Assets/Images/Skills/PhotoShop.png';
import JavaScript from '../../Assets/Images/Skills/JavaScript.png';
import NodeJS from '../../Assets/Images/Skills/NodeJS.png';
import Github from '../../Assets/Images/Skills/Github.png';
import CSharp from '../../Assets/Images/Skills/CSharp.png';
import ExpressJS from '../../Assets/Images/Skills/ExpressJS.png';
import DotNet from '../../Assets/Images/Skills/DotNET.png';
import Html5 from '../../Assets/Images/Skills/HTML5.png';
import Css3 from '../../Assets/Images/Skills/CSS3.png';
import Materialize from '../../Assets/Images/Skills/MaterializeUI.png';
import GraphQL from '../../Assets/Images/Skills/GraphQL.png';
import Apollo from '../../Assets/Images/Skills/ApolloGraphQL.png';
import Bootstrap from '../../Assets/Images/Skills/Bootstrap.png';
import Blender from '../../Assets/Images/Skills/Blender.png';
import TypeScript from '../../Assets/Images/Skills/TypeScript.png';
import NextJS from '../../Assets/Images/Skills/NextJS.png';
import MongoDB from '../../Assets/Images/Skills/MongoDB.png';
import Mongoose from '../../Assets/Images/Skills/Mongoose.png';
import ReactJS from '../../Assets/Images/Skills/React.png';
import Postman from '../../Assets/Images/Skills/postman.png';
import RESTful from '../../Assets/Images/Skills/RestfulAPI.png';
import Gimp from '../../Assets/Images/Skills/Gimp.png';
import Axios from '../../Assets/Images/Skills/axios.png';
import SkillLogoItem from './SkillLogoItem/SkillLogoItem';
import classes from './Skills.module.css';
import { Fade } from 'react-awesome-reveal';

const skillItems = [
  { id: 'skill-0001', title: 'JavaScript', logo: JavaScript },
  { id: 'skill-0002', title: 'ReactJS', logo: ReactJS },
  { id: 'skill-0003', title: 'HTML5', logo: Html5 },
  { id: 'skill-0004', title: 'CSS3', logo: Css3 },
  { id: 'skill-0005', title: 'TypeScript', logo: TypeScript },
  { id: 'skill-0006', title: 'NodeJS', logo: NodeJS },
  { id: 'skill-0007', title: 'NextJS', logo: NextJS },
  { id: 'skill-0008', title: 'MongoDB', logo: MongoDB },
  { id: 'skill-0009', title: 'Mongoose', logo: Mongoose },
  { id: 'skill-0010', title: 'GraphQL', logo: GraphQL },
  { id: 'skill-0011', title: 'Apollo', logo: Apollo },
  { id: 'skill-0012', title: 'Materialize CSS', logo: Materialize },
  { id: 'skill-0013', title: 'ExpressJS', logo: ExpressJS },
  { id: 'skill-0014', title: 'Postman', logo: Postman },
  { id: 'skill-0015', title: 'RESTful API', logo: RESTful },
  { id: 'skill-0016', title: 'Axios', logo: Axios },
  { id: 'skill-0017', title: 'Bootstrap', logo: Bootstrap },
  { id: 'skill-0018', title: 'GitHub', logo: Github },
  { id: 'skill-0019', title: 'ASP.NET', logo: DotNet },
  { id: 'skill-0020', title: 'C#', logo: CSharp },
  { id: 'skill-0021', title: 'Adobe PhotoShop', logo: PhotoShop },
  { id: 'skill-0022', title: 'GIMP', logo: Gimp },
  { id: 'skill-0023', title: 'Blender 3D Modeling', logo: Blender },
];

const Skills = () => {
  return (
    <Fade delay={600} triggerOnce>
      <div className={classes.SkillsContainer}>
        {skillItems.map((item) => (
          <SkillLogoItem key={item.id} title={item.title} logo={item.logo} />
        ))}
      </div>
    </Fade>
  );
};

export default Skills;
