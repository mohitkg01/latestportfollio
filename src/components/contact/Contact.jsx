import React from 'react'
import {BiLogoInstagramAlt,BiLogoGmail} from 'react-icons/bi'
import './Contact.css';


const Contact = () => {
  return (
   <div className="contact" id='contact'>
     <h1>Contact Me</h1>
     
     <div className="icon">
     <a href="https://mail.google.com" target='blank'><BiLogoGmail/></a>
    <a href="https://www.instagram.com/" target='blank'><BiLogoInstagramAlt/></a>
     </div>
     <span className='gmail'>mohitkg2601@gmail.com</span>
   </div>
  )
}

export default Contact;