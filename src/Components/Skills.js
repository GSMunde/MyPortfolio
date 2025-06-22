import React from 'react'; 
import { TbBrandRedux } from "react-icons/tb";
import {FaReact, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaHtml5, FaCss3} from "react-icons/fa";
import { DiJavascript1} from "react-icons/di";
import {SiAntdesign, SiChakraui, SiPostman, SiTailwindcss, SiVercel, SiVisualstudiocode} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
      Postman: <SiPostman/>,
      React: <FaReact/>,
      TailwindCSS: <SiTailwindcss/>,
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
      ChakraUI : <SiChakraui/>,
      AntDesign : <SiAntdesign/>,
      VSCode: <SiVisualstudiocode/> 
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
