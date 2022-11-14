import React from "react";
import styles from "./Portfolio.module.css";
import cabin from "../images/cabin.png";
import cake from "../images/cake.png";
import circus from "../images/circus.png";
import game from "../images/game.png";
import safe from "../images/safe.png";
import submarine from "../images/submarine.png";

export default function Portfolio() {
  const imgs = [
    {
      title: "one",
      src: {cabin},
    },
    {
      title: "2",
      src: {cake},
    },
    {
      title: "3",
      src: {circus},
    },
    {
      title: "4",
      src: {game},
    },
  ];
return (

    <section className={styles.min_h}>
        <div className="mt-5 pt-5">
            <div className="container mt-5">
                <h2 className={`text-uppercase text-center ${styles.port_text}`}>Portfolio</h2>

                <div className="logo_divider w-100 d-flex justify-content-center align-items-center mt-4">
                    <div className={styles.dark_line}></div>

                    <svg className={`${styles.svg_img} svg-inline--fa fa-star fa-w-18`} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>

                    <div className={styles.dark_line}></div>

                </div>

                <div className="row mt-3 gy-4 mb-5">
                    <div className="col-col-md-6 col-lg-4">
                        <div className={`${styles.pot_imges}  position-relative`}>
                            <div className={`inner_img position-absolute top-0 start-0 ${styles.bg_sign} w-100 h-100 d-flex justify-content-center align-items-center`}>
                            <svg className={`${styles.svg_port} text-white svg-inline--fa fa-plus fa-w-14 fa-3x`} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                            </div>
                            <img className='img-fluid' src={cabin} alt="" />

                            
                        </div>
                    </div>

                    <div className="col-col-md-6 col-lg-4">
                        <div className={`${styles.pot_imges}  position-relative`}>
                            <div className={`inner_img position-absolute top-0 start-0 ${styles.bg_sign} w-100 h-100 d-flex justify-content-center align-items-center`}>
                            <svg className={`${styles.svg_port} text-white svg-inline--fa fa-plus fa-w-14 fa-3x`} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                            </div>
                            <img className='img-fluid' src={cake} alt="" />

                            
                        </div>
                    </div>

                    <div className="col-col-md-6 col-lg-4">
                        <div className={`${styles.pot_imges}  position-relative`}>
                            <div className={`inner_img position-absolute top-0 start-0 ${styles.bg_sign} w-100 h-100 d-flex justify-content-center align-items-center`}>
                            <svg className={`${styles.svg_port} text-white svg-inline--fa fa-plus fa-w-14 fa-3x`} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                            </div>
                            <img className='img-fluid' src={circus} alt="" />

                            
                        </div>
                    </div>

                    <div className="col-col-md-6 col-lg-4">
                        <div className={`${styles.pot_imges}  position-relative`}>
                            <div className={`inner_img position-absolute top-0 start-0 ${styles.bg_sign} w-100 h-100 d-flex justify-content-center align-items-center`}>
                            <svg className={`${styles.svg_port} text-white svg-inline--fa fa-plus fa-w-14 fa-3x`} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                            </div>
                            <img className='img-fluid' src={game} alt="" />

                            
                        </div>
                    </div>

                    <div className="col-col-md-6 col-lg-4">
                        <div className={`${styles.pot_imges}  position-relative`}>
                            <div className={`inner_img position-absolute top-0 start-0 ${styles.bg_sign} w-100 h-100 d-flex justify-content-center align-items-center`}>
                            <svg className={`${styles.svg_port} text-white svg-inline--fa fa-plus fa-w-14 fa-3x`} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                            </div>
                            <img className='img-fluid' src={safe} alt="" />

                            
                        </div>
                    </div>

                    <div className="col-col-md-6 col-lg-4">
                        <div className={`${styles.pot_imges}  position-relative`}>
                            <div className={`inner_img position-absolute top-0 start-0 ${styles.bg_sign} w-100 h-100 d-flex justify-content-center align-items-center`}>
                            <svg className={`${styles.svg_port} text-white svg-inline--fa fa-plus fa-w-14 fa-3x`} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                            </div>
                            <img className='img-fluid' src={submarine} alt="" />

                            
                        </div>
                    </div>
                </div>

        </div>
        </div>

    </section>
)}