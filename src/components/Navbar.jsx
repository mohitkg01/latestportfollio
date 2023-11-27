import React from 'react'
import './Navbar.css';
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
  return (
    <div className="wrapper">
        <div className="n-left">
            <div className="n-name">Mohit</div>
        </div>
        <div className="n-right">
            <nav className="list">
                <ul className='ul'>
                <HashLink smooth to="#intro">Home</HashLink>
                <HashLink smooth to="#about">About</HashLink>
                <HashLink smooth to="#project">Project</HashLink>
                <HashLink smooth to="#contact">Contact</HashLink>
                </ul>
            </nav>    
        </div>
    </div>
    
  )
}

export default Navbar;