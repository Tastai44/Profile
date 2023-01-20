import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillPhone} from 'react-icons/ai'
import emailjs from 'emailjs-com'
import { useRef } from 'react'

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sq2sx5a', 'template_61mtdq5', form.current, '005ydUZ9DmLrNf0ML')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>tastai_kh@cmu.ac.th</h5>
            <a href="mailto:tastai_kh@cmu.ac.th" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <AiFillPhone className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5>0997463932</h5>
            <a href="tel:+0997463932" target="_blank">Calls</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact