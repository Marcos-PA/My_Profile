import React from 'react'
import './portifolio.css'
import IMG1 from '../../assets/img/portfolio7.png'
import IMG2 from '../../assets/img/portfolio2.jpg'
import IMG3 from '../../assets/img/portfolio3.jpg'
import IMG4 from '../../assets/img/portfolio4.jpg'
import IMG5 from '../../assets/img/portfolio5.png'
import IMG6 from '../../assets/img/portfolio6.jpg'

const data = [
  {
    id: 1,
    title: 'A project that simulates a web social midia, made with HTML, CSS, and JS',
    image: IMG1,
    github: 'https://github.com/Marcos-PA/Web-Social-Midia',
    demo: 'https://marcos-pa.github.io/Web-Social-Midia/',
    classe:'fineshed',
  },
  {
    id: 2,
    title: 'This portfolio item is under development',
    image: IMG2,
    github: 'https://github.com/Marcos-PA',
    demo: 'https://github.com/Marcos-PA',
    classe:'on-working',
  },
  {
    id: 3,
    title: 'This portfolio item is under development',
    image: IMG3,
    github: 'https://github.com/Marcos-PA',
    demo: 'https://github.com/Marcos-PA',
    classe:'on-working',
  },
  {
    id: 4,
    title: 'This portfolio item is under development',
    image: IMG4,
    github: 'https://github.com/Marcos-PA',
    demo: 'https://github.com/Marcos-PA',
    classe:'on-working',
  },
  {
    id: 5,
    title: 'This portfolio item is under development',
    image: IMG5,
    github: 'https://github.com/Marcos-PA',
    demo: 'https://github.com/Marcos-PA',
    classe:'on-working',
  },
  {
    id: 6,
    title: 'This portfolio item is under development',
    image: IMG6,
    github: 'https://github.com/Marcos-PA',
    demo: 'https://github.com/Marcos-PA',
    classe:'on-working',
  },

]
const Portifolio = () => {
  return (
    <section id='portfolio' >
      <h5>My Recent Work</h5>
      <h2>Portifolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo, classe }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} className={classe} alt={title} />
                </div>
                <div className='portfolio__item-header'>
                  <h2> {title}</h2>
                  <div className='portfolio__item-cta'>
                    <a href={github} className='btn' target='_blank' >Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                  </div>
                </div>

              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portifolio