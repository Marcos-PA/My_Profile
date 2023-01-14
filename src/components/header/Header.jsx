import React from 'react'
import './header.css'
import Typical from 'react-typical'
import CTA from './CTA'
import ME from '../../assets/img/me.svg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div>
          <h5>Hello I'm </h5>
          <h1>Marcos Paulo</h1>
          <h2> I'm a
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                ' Web Developer 💻',
                1500,
                ' Data Science Student 📈',
                1500,
                ' Tech Lover 🖤',
                1500,
                ' IT professional ⚙️',
                1500,
              ]}

            />
          </h2>
          <CTA />
        </div>

        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header