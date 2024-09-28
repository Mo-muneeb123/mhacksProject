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
              The Community Sentiment Heatmap is a web application that collects and analyzes tweets and local news headlines to provide a real-time visualization of community sentiment across Michigan counties. Using NLP sentiment analysis, we track positive and negative moods and present them on an interactive heatmap.
            </p>
            <p className="font-size">
              Our aim is to help local authorities and organizations better understand the community's emotional state and respond accordingly to issues or celebrations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
