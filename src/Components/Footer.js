import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Geetanjali Munde</h4>
      <h4>Copyright &copy; 2024 GM</h4>
      <div className='footerLinks'>
        <a href="https://github.com/GSMunde" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href='https://www.linkedin.com/in/geetanjali-munde-72957b324' target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href='mailTo:geetanjalimunde1172@gmail.com' target='_blank' rel="noreferrer"><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer