import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SlSocialInstagram} from 'react-icons/sl'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/marcospaulofs/" target="blank"><BsLinkedin/></a>
        <a href="https://github.com/Marcos-PA" target="blank"><FaGithub/></a>
        <a href="https://www.instagram.com/marcps_paulo/" target="blank"><SlSocialInstagram/></a>
    </div>
  )
}

export default HeaderSocials