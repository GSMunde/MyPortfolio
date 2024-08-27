import React from 'react'; 
import { TbBrandRedux } from "react-icons/tb";
import {FaReact, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaHtml5, FaCss3} from "react-icons/fa";
import { DiJavascript1} from "react-icons/di";
import {SiChakraui, SiPostman, SiVercel} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
      Postman: <SiPostman/>,
      React: <FaReact/>,
      Javascript: <DiJavascript1/>,
      Redux : <TbBrandRedux/>,
      HTML : <FaHtml5/>,
      CSS : <FaCss3 />,
      Git : <FaGitAlt/>,
      Github : <FaGithub/>,
      Npm : <FaNpm/>,
      Figma : <FaFigma/>,
      Bootstrap: <FaBootstrap/>,
      Vercel : <SiVercel/>,
      ChakraUI : <SiChakraui/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
