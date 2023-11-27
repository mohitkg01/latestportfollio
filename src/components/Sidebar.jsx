import React from 'react'
import './Navbar.css'
import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs';

const Sidebar = () => {
  return (
    <div className="icons">
    <a href="https://www.linkedin.com/in/mohit-kumar-gond-156188218/" target='blank'><BsLinkedin/></a>
    <a href="https://github.com/mohitkg01" target='blank'><BsGithub/></a>
    <a href="https://www.instagram.com/" target='blank'><BsInstagram/></a>
</div>
  )
}

export default Sidebar