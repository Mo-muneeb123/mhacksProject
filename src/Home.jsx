import React from 'react'
import { Link } from 'react-router-dom';
import banner2 from './assets/Images/banner2.png'
import { openmenu, closemenu } from './utils/util';

const Home = () => {
  return (
    <div id="header">
    <div className="container">
      <nav>
        <img src={banner2} className="logo"/>
        <ul id="sidemenu">
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#map">Heatmap</a></li>
          <li><a href="#contact">Contact</a></li>

          <i className="fa-solid fa-xmark" onClick={closemenu}></i>
        </ul>
          <i className="fa-solid fa-bars" onClick={openmenu}></i>
      </nav>
      <div className="header-text">
        <p>Mapping the Pulse of your Community</p>
        <h1>Welcome To <span>MOOD</span> <br /> MAP</h1>
      </div>
    </div>
  </div>
  )
}

export default Home
