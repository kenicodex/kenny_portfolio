import React from 'react'
import Header from "./Header/Header"
import Skills from './Skills/Skills'
import WorkExperience from './WorkExperience'

import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"
import "./portfolio.css"


const Portfolio = () => {
  return (
    <>
        <Header />

        {/* <About /> */}
        <WorkExperience />
        {/* <Project /> */}
        <Skills />
        <Contact />
        <Footer />
    </>
  )
}

export default Portfolio