import React from 'react';
import books from '../assets/books.png'
import '../Style/About.css'

const about = () => {
  return (
    <div className="main" id='about'>
        <h1>ABOUT ME</h1>
        <div className="abt">
        <div className="a-left">
            <img src={books} alt="" />
        </div>
        <div className="a-right">
            <span>I am Mohit Kumar Gond, an enthusiastic Front-end React Developer residing in the Uttar Pradesh, India.</span>
            <span>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React and SCSS ,Sql ,Basic Aws,Git,Script Language.
                 I excel in designing and maintaining responsive websites that offer a smooth user experience. 
                 My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques.
                  I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</span>
        </div>
        </div>
    </div>
    
  )
}

export default about;