import React from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.contact_section}>
       <div className="container mt-5">
            <h2 className={`text-uppercase text-center ${styles.port_text}`}>Contact Me</h2>

        <div className="logo_divider w-100 d-flex justify-content-center align-items-center mt-4">
            <div className={styles.dark_line}></div>

            <svg className={`${styles.svg_img} svg-inline--fa fa-star fa-w-18`} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>

            <div className={styles.dark_line}></div>
        </div>

        <form action="">
          <div className="row mt-5">
            <div className="col-lg-8 mx-auto">
            <div className="control-group">

            <div className={`form-group mb-4 ${styles.b_bottom}`}>
            <input className={`form-control pb-3 ${styles.input_adjust}`} id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." aria-invalid="false"/>
            </div>

            <div className={`form-group mb-4 ${styles.b_bottom}`}>
            <input className={`form-control pb-3 ${styles.input_adjust}`} id="name" type="text" placeholder="Email Address" required="required" data-validation-required-message="Please enter your name." aria-invalid="false"/>
            </div>

            <div className={`form-group mb-4  ${styles.b_bottom}`}>
            <input className={`form-control pb-3 ${styles.input_adjust}`} id="name" type="text" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your name." aria-invalid="false"/>
            </div>

            <div className={`form-group mb-4  ${styles.b_bottom}`}>
            <textarea className={`form-control pb-3 ${styles.input_adjust}`} id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message." aria-invalid="false"></textarea>
            </div>
            

            <div className={`form-group mb-4 `}>
            <button class={`btn ${styles.btn_color} ${styles.pad_btn}`} id="sendMessageButton" type="submit">Send</button>
            </div>


          </div>
            </div>
          </div>
        </form>

       </div>
    </section>
  )
}
