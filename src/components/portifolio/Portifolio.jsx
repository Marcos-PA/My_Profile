import React from 'react'
import './portifolio.css'
import IMG1 from '../../assets/img/portfolio1.jpg'
import IMG2 from '../../assets/img/portfolio2.jpg'
import IMG3 from '../../assets/img/portfolio3.jpg'
import IMG4 from '../../assets/img/portfolio4.jpg'
import IMG5 from '../../assets/img/portfolio5.png'
import IMG6 from '../../assets/img/portfolio6.jpg'

const data = [
  {
    id: 1,
    title: 'This is a portifolio item title',
    image: IMG1,
    github: 'http://github.com',
    demo: 'http://github.com',
  },
  {
    id: 2,
    title: 'This is a portifolio item title',
    image: IMG2,
    github: 'http://github.com',
    demo: 'http://github.com',
  },
  {
    id: 3,
    title: 'This is a portifolio item title',
    image: IMG3,
    github: 'http://github.com',
    demo: 'http://github.com',
  },
  {
    id: 4,
    title: 'This is a portifolio item title',
    image: IMG4,
    github: 'http://github.com',
    demo: 'http://github.com',
  },
  {
    id: 5,
    title: 'This is a portifolio item title',
    image: IMG5,
    github: 'http://github.com',
    demo: 'http://github.com',
  },
  {
    id: 6,
    title: 'This is a portifolio item title',
    image: IMG6,
    github: 'http://github.com',
    demo: 'http://github.com',
  },

]
const Portifolio = () => {
  return (
    <section id='portfolio' >
      <h5>My Recent Work</h5>
      <h2>Portifolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
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