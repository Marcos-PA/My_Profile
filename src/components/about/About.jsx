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
              <small>2+ Ano de estudo </small>
            </article>
            <article className='about__card' >
              <FaAward className='about__icon' />
              <h5>IT</h5>
              <small>3+ anos de experiencia</small>
            </article>
          </div>
          <p>
            I am a passionate programmer and I love to learn new things. I have been working as a IT Technical for 3 years and I have been studying programming for 2 year. I am currently studying at the PUC-Minas, where I am studying Software Engineering. I am currently open to work as programmer.
          </p>

          <a href='#contact' className='btn btn__primary'>Let's Talk</a>
        </div>
      </div>
    </section >
  )
}

export default About