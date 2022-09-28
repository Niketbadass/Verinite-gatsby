import React, { useEffect, useState } from 'react'

import './all.scss'
import './responsive.scss'
import Header from './header/Header'
import Footer from './footer/Footer'
import 'aos/dist/aos.css'
import GetInTouch from './GetInTouch/GetInTouch'
import { Helmet } from 'react-helmet'
const TemplateWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true)
  let AOS
  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    const AOS = require('aos')
    AOS.init({
      once: true,
      offset: 100,
      delay: 0,
      duration: 900,
      easing: 'ease',
      mirror: true,
    })
  }, [])

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  }, [loading])

  const renderHelmet = () => {
    const isNotHomePage =
      typeof window !== 'undefined' && window.location.pathname !== '/'
    if (isNotHomePage) {
      return (
        <Helmet>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;600;800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
            crossOrigin="anonymous"
          />
        </Helmet>
      )
    }
    return null
  }

  const helmet = renderHelmet()

  return (
    <>
      {helmet}
      <Header />
      <div>{children}</div>
      <Footer />
      
    </>
  )
}
export default TemplateWrapper
