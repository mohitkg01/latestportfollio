import React from 'react'
import {BiLogoInstagramAlt,BiLogoGmail} from 'react-icons/bi'
import '../Style/Contact.css';
import {BsLinkedin,BsGithub} from 'react-icons/bs';


const Contact = () => {
  return (
   <div className="contact" id='contact'>
     <h1>Contact Me</h1>
     <div className="icon">
      <a href="https://mail.google.com" target='blank'><BiLogoGmail/></a>
      <a href="https://www.instagram.com/" target='blank'><BiLogoInstagramAlt/></a>
      <a href="https://www.linkedin.com/in/mohit-kumar-gond-156188218/" target='blank'><BsLinkedin/></a>
    <a href="https://github.com/mohitkg01" target='blank'><BsGithub/></a>
      
     </div>
     <span className='gmail'>mohitkg2601@gmail.com</span>
   </div>
  )
}

export default Contact;