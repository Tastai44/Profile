import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/tastai-khianjai-b92670259/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Tastai44" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials