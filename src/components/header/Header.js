import React, { useState, useEffect } from 'react'

import FullpageMenu from './Components/FullPageMenu'
import SiteLogo from '../UI/SiteLogo/SiteLogo'
import MainMenu from './Components/MainMenu'
import './Header.scss'
import MenuToggleIcon from '../icons/MenuToggler'

const Header = () => {
  const [headerclass, setHeaderclass] = useState('d-flex align-items-center')
  const [fullpageshow, setFullpageshow] = useState(false)
  const [showclass, setShowclass] = useState('full_page_menu')
  const [current, setCurrent] = useState('')
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setHeaderclass('d-flex align-items-center sticky')
      } else {
        setHeaderclass('d-flex align-items-center')
      }
    })
  }, [])

  useEffect(() => {
    if (fullpageshow) {
      setShowclass('full_page_menu show')
    } else {
      setShowclass('full_page_menu')
    }
  }, [fullpageshow])

  useEffect(() => {
    if (toggle) {
      setCurrent('current')
    } else {
      setCurrent('')
    }
  }, [toggle])

  return (
    <header className={headerclass}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-3 d-lg-none">
            <div className="hamburger-menu" onClick={() => setToggle(!toggle)}>
              <span className={'line-top ' + current}></span>
              <span className={'line-center ' + current}></span>
              <span className={'line-bottom ' + current}></span>
            </div>
          </div>
          <div className="col-lg-3 logo col-6 text-center text-lg-left">
            <SiteLogo />
          </div>
          <div className="col-lg-9 col-3">
            <div className="menu_toggler float-right">
              <MenuToggleIcon onClick={() => setFullpageshow(!fullpageshow)} />
            </div>
            <MainMenu toggle={toggle} />
          </div>
        </div>
      </div>
      <FullpageMenu
        showclass={showclass}
        setFullPageMenu={() => setFullpageshow(!fullpageshow)}
      />
    </header>
  )
}
export default Header
