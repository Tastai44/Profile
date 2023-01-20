import React from 'react'
import './About.css'
import Me from '../../assets/meT.jpg'

function About() {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <p>
            Currently, I am a third year of Information Systems and Network Engineering 
            at Chiang Mai University. I really have a passion on web development and programing. 
            And my personal characters are enthusiasm, motivation, ambition, self-learning, 
            and easy to keep in touch with others.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>


      </div>
    </section>
  )
}

export default About