import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
<div className='footer-content'></div>
      <h4>Developed by Rahul Singh</h4>
      <h4>Copyright &copy; 2023 RS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/RahulDhami" target='_blank' rel='noreferrer'><FaGithub /></a>
        <a href="https://Instagram.com/_rahul_dhami" target='_blank' rel='noreferrer'><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/rahul-dhami-615ab6258" target='_blank' rel='noreferrer'><FaLinkedin /></a>
        <a href='mailTo:Rahuldhami11221@gmail.com' target='_blank' rel='noreferrer'><GrMail /></a>
      </div>
    </footer>
  )
}

export default Footer