import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id="header">
    <div className="container">
      <nav>
        <ul id="sidemenu">
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#Heatmap">Heatmap</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
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
