import React from 'react'
import '../Style/Intro.css'
import img from '../assets/image.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import sass from '../assets/sass.png'
import react from '../assets/react.png'
import {AiOutlineDownload} from 'react-icons/ai';
import pdf from '../assets/resume.pdf';
import { HashLink } from 'react-router-hash-link';
import {BsArrowDownSquare} from 'react-icons/bs';


const Intro = () => {
  return ( 
  <div  className='home' id="intropage">
    <div className="intro">
        <div className="i-left">
            <div className="name">
                <h2>Hy! I Am</h2>
                <h1>Mohit</h1>
                <p>Hello, I am Mohit Kumar Gond, an enthusiastic Front-end React Developer  and DevOps  residing in the Uttar Pradesh, India.
                  At present I am undergoing Devops Training from an Training Instiute till now I have learn basic Aws, Git ,Script language ,Docker ,Ansible and going to learn more.
                </p>
                <span>Hire Me!</span>
            </div>     
        </div>
        <div className="i-right">
       <img className='img_i' src={img}  alt="" />
        </div>
    </div>
    <div className='scr'>
            <div className="down">
            <HashLink smooth to="#contact" title='Scroll Down'><BsArrowDownSquare/></HashLink>
            </div> 
            <div className="pdf">
            <a  href = {pdf} target = "blank" title='Download here'><AiOutlineDownload/></a>
            <span>Resume</span>
            </div>
           
             
      </div>
    <div className="bottom">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={javascript} alt="" />
            <img src={react} alt="" />
            <img src={sass} alt="" />
      </div>
    
  </div>
  )
}

export default Intro;