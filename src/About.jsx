import React from 'react'

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            {/* You can add content or an image here */}
          </div>

          <div className="about-col-2">
            <h1 className="sub-title">About the Project</h1>
            <p className="font-size">
            Mood Map is a web application designed to display the general atmosphere or sentiment of different regions based on real-time data. The software uses Magic Loops to apply sentiment analysis to local news headlines that are gathered via News APIs. The outcomes are then shown as a heatmap on a map of the United States, highlighting places with different levels of a positive, negative, or neutral attitude. This makes it possible for users to track geographic changes in public mood, which makes it an effective tool for monitoring how communities are responding to recent events, regional advancements, or general societal trends. Our aim is to help local authorities and organizations better understand the community's emotional state and respond accordingly to issues or celebrations.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
