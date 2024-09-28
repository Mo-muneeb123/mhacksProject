import React from 'react'

const Home = () => {
  return (
    <div id="header">
    <div className="container">
        <nav>
            {/* <img src="images/logo.png" class="logo"> */}
            <ul id="sidemenu">
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#map">Map</a></li>
                <li><a href="#contact">Contact</a></li>

                <i className="fa-solid fa-xmark" onClick="closemenu()"></i>
            </ul>
            <i className="fa-solid fa-bars" onClick="openmenu()"></i>
        </nav>
        <div className="header-text">
            <p>Junior CS Student at Wayne State University</p>
            <h1>Hi! I'm <span>Mohammed</span> <br>Muneeb</br> </h1>
        </div>
    </div>


    </div>
  )
}

export default Home
