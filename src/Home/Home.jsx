import React from 'react'
import styles from './Home.module.css'
import avatar from '../images/avataaars.svg'

export default function Home() {
  return (
   <header className={`text-white text-center ${styles.bg_home} ${styles.section_height}`}>
    <div className="container d-flex justify-content-center align-items-center flex-column">
      <img className={`${styles.avatar_size} pt-5 mt-5`} src={avatar} alt="" />

      <h1 className={`mt-5 text-uppercase ${styles.text_h1}`}>Start React</h1>

      <div className="logo_divider w-100 d-flex justify-content-center align-items-center mt-4">
        <div className={styles.white_line}></div>

        <svg className={`${styles.svg_img} svg-inline--fa fa-star fa-w-18`} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>

        <div className={styles.white_line}></div>

      </div>

      <p className={`mt-4 ${styles.p_text} pb-5 mb-5`}>Graphic Artist - Web Designer - Illustrator</p>
    </div>
   </header>
  )
}
