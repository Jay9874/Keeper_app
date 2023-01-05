import React from 'react'
import Header from './Navigations/Header'
import Footer from './Navigations/Footer'

export default function About () {
  return (
    <div>
      <Header />
      <div className='about-container'>
        <h1>About</h1>
        <p>
          I am a software developer and this is my first MERN stack project.
        </p>
        <p>I hope you like it.</p>
      </div>
    <Footer />
    </div>
  )
}
