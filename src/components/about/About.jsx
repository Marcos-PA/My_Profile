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
              <h5>Programming</h5>
              <small>2+ years of studying </small>
            </article>
            <article className='about__card' >
              <FaAward className='about__icon' />
              <h5>IT technician</h5>
              <small>3+ years of experience</small>
            </article>
          </div>
          <p>
          I'm a passionate programmer and I love to learn new things. I have worked as an administrative assistant for 2 years with some small jobs as an IT guy and have been studying programming for 3 years. I'm currently attending majoring in Software Engineering at PUC-Minas with expected graduation in December 2024. I am presently open to opportunities to work as a programmer or trainee.
          </p>

          <a href='#contact' className='btn btn__primary'>Let's Talk</a>
        </div>
      </div>
    </section >
  )
}

export default About