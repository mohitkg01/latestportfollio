import React from 'react'
import todo from '../assets/todo.png';
import shoes from '../assets/shoesic.jpg';
import weather from '../assets/wheather.jpg';
import crypto from '../assets/crypto.jpg';
import yoga  from '../assets/yoga.jpg';
import '../Style/project.css';
import { AiFillGithub} from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";

const projectlist = [
  {
    name:'Yoga app',
    github:'https://github.com/mohitkg01/yogaapp',
    url:'https://yogaapp-gilt.vercel.app/',
    img:yoga,
    text:"Our Yoga Booking App, crafted with the power of React, brings tranquility to your fingertips. Seamlessly book yoga classes, workshops, and sessions with an intuitive interface. Personalize your yoga journey, track attendance, and receive timely notifications. Whether you're a novice or seasoned yogi, explore diverse classes and connect with a like-minded community. Elevate your wellness experience with our React-based Yoga Booking App—where technology meets mindfulness for a harmonious practice."
    },
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
  },
  {
    name: 'To do list',
    github: 'https://github.com/mohitkg01/proojectTodo',
    url: 'https://prooject-todo.vercel.app/',
    img:todo,
    text:"A Todo List project is a practical and efficient way to organize tasks and manage daily activities. Users can easily add, edit, and delete tasks,filter ,drag and drop their task ensuring a dynamic and user-friendly experience."
  },
   {
    name: 'Weather',
    github: 'https://github.com/mohitkg01/Weather-Cast',
    url: 'https://wheather-status.netlify.app/',
    img:weather,
    text:"A weather status live UI page using React,Html,Css and JavaScript.Where we can retrieves real time Weather data by entering city name."
  },
  
  
];

const project = () => {
  return (
  <div className="project" id='project'>
    <h1>My Projects</h1>
    { projectlist.map((list)=>{
      return (
        <div className="projects">
          <div className='img_p'>
            <a href={list.url}><img src={list.img} alt="" /></a>
          </div>
          <div className='title'>
          <h1>
            {list.name}</h1>
          <div className="text">
          <p>{list.text}</p>
          <div className='icons'>
             <a href={list.github} target='blank'>Code <AiFillGithub/></a>
             <a href={list.url} target='blank'>Live <BsBoxArrowUpRight/></a>
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