import React from 'react'
import './about.css'
import ME from '../../assets/img/me_programming.svg'
import { FaAward } from 'react-icons/fa'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container ">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card' >
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Studing</small>
            </article>
            <article className='about__card' >
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Studing</small>
            </article>
          </div>
          <p>Lorem ipsum *25
            dolor sit amet consectetur adipisicing elit.
            Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum *25
            dolor sit amet consectetur adipisicing elit.
            Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            
          </p>

          <a href='#contact' className='btn btn__primary'>Let's Talk</a>
        </div>
      </div>
    </section >
  )
}

export default About