import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import About from './components/about/About'
import Portifolio from './components/portifolio/Portifolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Services from './components/services/Services'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience />
    <Portifolio/>
    <Services/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
 