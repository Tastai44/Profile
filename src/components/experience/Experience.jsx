import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Fronted Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Good</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Good</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Good</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Good</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React.js</h4>
                <small className='text-light'>Good</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MUI</h4>
                <small className='text-light'>Good</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backtend">
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Good</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Good</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>NoSQL</h4>
                <small className='text-light'>Good</small>
              </div>
            </article>
          </div>
        </div>

      </div>


    </section>
  )
}

export default Experience