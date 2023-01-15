import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { SlSocialInstagram } from 'react-icons/sl'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>MARCPS</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portifolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/marcospaulofs/" target="blank"><BsLinkedin /></a>
        <a href="https://github.com/Marcos-PA" target="blank"><FaGithub /></a>
        <a href="https://www.instagram.com/marcps_paulo/" target="blank"><SlSocialInstagram /></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; MARCPS Ltda. All right reserved </small>
      </div>
    </footer>
  )
}

export default Footer