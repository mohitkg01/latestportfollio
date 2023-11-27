import React from 'react'
import './Intro.css'
import img from '../../assets/image.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import sass from '../../assets/sass.png'
import react from '../../assets/react.png'
import {AiOutlineDownload} from 'react-icons/ai';
import pdf from '../../assets/Resume_mohit.pdf';
import { HashLink } from 'react-router-hash-link';
import {BsArrowDownSquare} from 'react-icons/bs';


const Intro = () => {
  return ( <div  className='home' id="intro">
    <div className="intro">
        <div className="pdf">
        <span>Resume</span>
        <a  href = {pdf} target = "blank"><AiOutlineDownload/></a>
        </div>
        <div className="i-left">
            <div className="name">
                <span>Hy! I Am</span>
                <span>Mohit</span>
                <span>Hello, I am Mohit Kumar Gond, an enthusiastic Front-end React Developer residing in the Uttar Pradesh, India.
                </span>
                <span>Hire Me!</span>
            </div>
            <div className="down">
            <HashLink smooth to="#contact"><BsArrowDownSquare/></HashLink>
            </div>       
        </div>
        <div className="i-right">
       <img className='img' src={img}  alt="" />
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