import React from 'react'
import todo from '../assets/todo.png';
import shoes from '../assets/shoesic.jpg';
import weather from '../assets/wheather.jpg';
import crypto from '../assets/crypto.jpg';
import '../Style/project.css';
import { AiFillGithub, AiOutlineGithub} from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GenIcon } from 'react-icons/lib';

const projectlist = [
  {
    name: 'ShoesStore',
    github: 'https://github.com/mohitkg01/shoes',
    url: 'https://shoes-rose.vercel.app/home',
    img:shoes,
    text:"A Shoes Store website is an online platform that empowers users to explore a diverse range of footwear options that cater to their preferences and make seamless purchases.The website features sorting and filtering functionalities, allowing users to refine their search for shoes based on style, size, and other criteria. Users have the convenience of adding desired items to both their wishlist for future consideration and their shopping cart for immediate purchase."
  },
  {
    name: 'Crypto Tracker',
    github: 'https://github.com/mohitkg01/cryptotracker1',
    url: 'https://cryptotracker1-six.vercel.app/',
    img:crypto,
    text:" CryptoTrackr, the versatile cryptocurrency application, Provides real-time crypto info and stay updated on the latest news about cryptocurrencies."
  }, {
    name: 'Weather',
    github: 'https://github.com/mohitkg01/Weather-Cast',
    url: 'https://wheather-status.netlify.app/',
    img:weather,
    text:"A weather status live UI page using React,Html,Css and JavaScript.Where we can retrieves real time Weather data by entering city name."
  },
  {
    name: 'ShoesStore',
    github: 'https://github.com/mohitkg01/todo-list',
    url: 'https://to-do-list545.netlify.app/',
    img:todo,
    text:"A Todo List project is a practical and efficient way to organize tasks and manage daily activities. Users can easily add, edit, and delete tasks, ensuring a dynamic and user-friendly experience."
  }
];

const project = () => {
  return (
  <div className="project" id='project'>

    <h1>My Projects</h1>
    { projectlist.map((list)=>{
      return (
        <div className="projects">
          <div>
          <div className='title'>
            {list.name}</div>
          <div className='img_p'>
          <img src={list.img} alt="" />
         </div>
          </div>
          <div>
          <div className="text">
          <p>{list.text}</p>
          <div className='icons'>
            <a href={list.github} target='blank'><AiFillGithub/></a>
            <a href={list.url} target='blank'><BsBoxArrowUpRight/></a>
          </div>
         </div>
          </div>
        </div>
      )
    })}
  </div>
  )
}

export default project