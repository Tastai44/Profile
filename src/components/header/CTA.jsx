import React from 'react'
import CV from '../../assets/CV_Tastai.pdf'
import Resume from '../../assets/Tastai_Resume.pdf'


function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary' id="btn">Let's Talk</a>
    </div>
  )
}

export default CTA