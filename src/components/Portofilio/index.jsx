import React from 'react'
import Header from "./Header/Header"
import Skills from './Skills/Skills'
import WorkExperience from './WorkExperience'
import About from "./About/About"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"
import "./portfolio.css"
import Project from './Projects/Projects'


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