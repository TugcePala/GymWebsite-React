import React from 'react'
import aboutimage from '../images/about.png'

function About() {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt="" />
        </div>
      <div className='about-text'>
        <h1>LEARN MORE ABOUT</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque alias dolore nesciunt possimus ea, ducimus facere placeat quibusdam rerum? Mollitia sint et eveniet velit quos maxime ratione, nihil distinctio. Tempore?</p>
        <button>READ MORE</button>
      </div>
    </div>
  )
}

export default About;
