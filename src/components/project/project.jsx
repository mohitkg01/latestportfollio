import React from 'react'
import todo from '../../assets/todo.png';
import shoes from '../../assets/shoesic.jpg';
import weather from '../../assets/wheather.jpg';
import crypto from '../../assets/crypto.jpg';
import './project.css'
import { AiOutlineGithub} from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";

const project = () => {
  return (
  <div className="project" id='project'>

    <h1>My Projects</h1>
    <div className="projects">
      <div className="project-info">
       <img src={shoes} alt="" /> </div>
        <div className="text">
          <span>Shoes Store</span>
          <span>
A Shoes Store website is an online platform that empowers users to explore a diverse range of footwear options that cater to their preferences and make seamless purchases. 
The website features sorting and filtering functionalities, allowing users to refine their search for shoes based on style, size, and other criteria. Users have the convenience of adding desired items to both their wishlist for future consideration and their shopping cart for immediate purchase.</span>
             <div className="code">
            <a href="https://github.com/mohitkg01/shoes" target="blank" >Code<AiOutlineGithub/></a>
            <a href="https://shoes-rose.vercel.app/home" target="blank">Live Demo <BsBoxArrowUpRight/></a>
          </div>
        </div>
    </div>
    <div className="projects">
      <div className="project-info">
       <img src={crypto} alt="" /> </div>
        <div className="text">
          <span>Crypto Tracker</span>
          <span>
          CryptoTrackr, the versatile cryptocurrency application, Provides real-time crypto info and stay updated on the latest news about cryptocurrencies.</span>
             <div className="code">
            <a href="https://github.com/mohitkg01/cryptotracker1" target="blank" >Code<AiOutlineGithub/></a>
            <a href="https://cryptotracker1-six.vercel.app/" target="blank">Live Demo <BsBoxArrowUpRight/></a>
          </div>
        </div>
    </div>
    <div className="projects">
    <div className="project-info">
        <img src={weather} alt="" />
        </div>
        <div className="text">
          <span>Weather status</span>
          <span>A weather status live UI page using React,Html,Css and JavaScript.
Where we can retrieves real time Weather data by entering city name.
</span>
          <div className="code">
            <a href="https://github.com/mohitkg01/Weather-Cast" target="_blank" >Code<AiOutlineGithub/></a>
            <a href=" https://wheather-status.netlify.app/" target="_blank">Live Demo<BsBoxArrowUpRight/></a>
          </div>
        </div>
    </div>
    <div className="projects">
    <div className="project-info">
        <img src={todo} alt="" />
        </div>
        <div className="text">
          <span>Todo List</span>
          <span>A Todo List project is a practical and efficient way to organize tasks and manage daily activities.
          . Users can easily add, edit, and delete tasks, ensuring a dynamic and user-friendly experience.
          </span>
             <div className="code">
            <a href="https://github.com/mohitkg01/todo-list" target="_blank" >Code<AiOutlineGithub/></a>
            <a href="https://to-do-list545.netlify.app/" target="_blank">Live Demo<BsBoxArrowUpRight/></a>
          </div>
        </div>
    </div>
  </div>
  )
}

export default project