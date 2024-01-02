import React, { useEffect, useState } from 'react'
import './css/navbar.css';
import { Link } from 'react-scroll'

const NavBar = () => {
  const [navbarStyle, setNavbarStyle] = useState({})
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scrollPercentage = (scrollTop / scrollHeight) * 100

      if (scrollPercentage >= 2) {
        setScroll(true)

        setNavbarStyle({
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        })
      } else {
        setNavbarStyle({})
        setScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <nav
        style={navbarStyle}
        className={`navbar ${open ? 'nav-open' : ''} ${
          scroll ? 'scrolled' : ''
        }`}
      >
        <div className="tophead">
          <h1>
            <Link
              className="name-logo"
              spy
              smooth
              offset={50}
              duration={500}
              to="home"
            >
              Jharold Cataluña
            </Link>{' '}
            <span className="blink" />
          </h1>
          <div
            className={`menu-btn ${open ? 'opened-btn' : ''}`}
            onClick={toggleMenu}
          >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              
              
            </div>
        </div>
        <ul className={`menu ${open ? 'open' : ''}`}>
          <li>
            <Link
              spy
              smooth
              offset={50}
              duration={500}
              onClick={toggleMenu}
              to="home"
            >
              {`< Home`}
            </Link>
          </li>
          <li>
            <Link
              spy
              smooth
              offset={50}
              duration={500}
              onClick={toggleMenu}
              to="about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              spy
              smooth
              offset={50}
              duration={500}
              onClick={toggleMenu}
              to="projects"
            >
              Works
            </Link>
          </li>
          <li>
            <li>
              <Link
                spy
                smooth
                offset={50}
                duration={500}
                onClick={toggleMenu}
                to="contact"
              >
                {`Contact />`}
              </Link>
            </li>
          </li>
        </ul>
      </nav>
      <div className={`scroll-to-top ${scroll ? 'scroll-true' : ''}`}>
        <Link spy smooth offset={50} duration={1000} to="home">
          <i className="fa-solid fa-arrow-up" />
        </Link>
      </div>
    </>
  )
}

export default NavBar
