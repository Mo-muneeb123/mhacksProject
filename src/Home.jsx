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
                
            </ul>
           
        </nav>
        <div className="header-text">
            <p>Welcome to Mood Map!</p>
            <h1>Mood Map Description</h1>
        </div>
    </div>


    </div>
  )
}

export default Home
