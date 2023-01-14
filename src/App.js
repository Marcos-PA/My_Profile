import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portifolio from './components/portifolio/Portifolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return ( <>
  <Header />
  <Navbar />
  <About />
  <Experience />
  <Services />
  <Portifolio />
  <Contact />
  <Footer />
  </>
  )
}

export default App