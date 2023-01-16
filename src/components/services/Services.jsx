import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services' >
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Java</h3>
          </div>
          <ul className='service__list'>
            {/*<li>
              <BiCheck className='service__list-icon' />
              <p>Compreensão básica dos mecanismos de carregamento das classes em Java </p>
  </li>*/}
            <li>
              <BiCheck className='service__list-icon' />
              <p>Waiting for the first opportunity</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3> Web Development </h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Crianção de Sites HTML/CSS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Conhecimento de Controle de Versão </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design responsivo </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Criação e Manipulação de BD MySQL </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Criação De Sites com React </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Data Science</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Waiting for the first opportunity</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services