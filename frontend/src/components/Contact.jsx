import React from 'react'
import Header from './Navigations/Header'
import Footer from './Navigations/Footer'

export default function Contact () {
  return (
    <div>
      <Header />
      <div className='contact-container'>
      <div className='contact'>
        <h1>Contacts</h1>
        <p>Email: jayprakashsharma225@gmail.com</p>
        <p>
        Twitter: <a target="_blank" href='https://www.twitter.com/jay_9874'>Jay9874</a><br />
        LinkedIn: <a target="_blank" href='https://www.linkedin.com/in/jay9874'>Jay9874</a>
        </p>
      </div>
     
    </div>
    <Footer />
    </div>
  )
}
