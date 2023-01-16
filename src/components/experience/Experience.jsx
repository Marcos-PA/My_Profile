import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import ME from '../../assets/img/experience.svg'
const Experience = () => {
  return (
    <section id='experience' >
      
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__me">
          <div className="experience__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="experience__frontend">
          <h3>Web Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>HTML/CSS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>JavScript</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>React-JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__it">
          <h3>IT</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Montagem</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Manutenção</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Formatação</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Programas</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Redes</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Data Science</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Excel</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Power BI</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience