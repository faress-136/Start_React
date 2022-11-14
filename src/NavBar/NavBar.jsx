import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <>

    <nav className={`navbar navbar-expand-lg  ${styles.bg_color}  text-uppercase fixed-top position-relative`} id={styles.nav}>
      <div className="container">
        <Link className={`text-decoration-none text-white ${styles.logo_style}`} to="">Start React</Link>


        <div className="links">
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item mx-0 m-lg-1'>
              <Link className={`text-decoration-none text-white nav-link py-3 px-0 px-lg-3 ${styles.link_font}`} to="portfolio">Portfolio</Link>
            </li>

            <li className='nav-item mx-0 m-lg-1'>
              <a className={`text-decoration-none text-white nav-link py-3 px-0 px-lg-3 ${styles.link_font}`} href="about">About</a>
            </li>

            <li className='nav-item mx-0 m-lg-1'>
              <a className={`text-decoration-none text-white nav-link py-3 px-0 px-lg-3 ${styles.link_font}`} href="contact">Contact</a>
            </li>
          </ul>
        </div>

      </div>






    </nav>





    </>
  )
}
