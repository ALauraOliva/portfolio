import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const form = useRef()
  const [popupMessage, setPopupMessage] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_gevcm95",
        "template_9u991ve",
        form.current,
        "WcDrvFzS70xJ5uc-T"
      )
      .then(
        (result) => {
          e.target.reset()
          setPopupMessage("Thanks for your message")
        },
        (error) => {
          console.log(error.text)
          setPopupMessage(
            "Problemas al enviar el mensaje. Inténtalo de nuevo más tarde."
          )
        }
      )
  }

  const closePopup = () => {
    setPopupMessage(null)
  }

  return (
    <section id="contact" className="contact_section">
      <h1>GET in TOUCH</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="row">
          <div className="contact_inputGroup">
            <input type="text" id="name" name="user_name" required />
            <label htmlFor="name"> Your Name</label>
          </div>
          <div className="contact_inputGroup">
            <input type="text" id="number" name="user_phone" required />
            <label htmlFor="number"> Phone No.</label>
          </div>
        </div>
        <div className="contact_inputGroup">
          <input type="email" id="email" name="user_email" required />
          <label htmlFor="email"> Email</label>
        </div>
        <div className="contact_inputGroup">
          <textarea id="message" rows="9" name="message" required></textarea>
          <label htmlFor="message"> Your Message</label>
        </div>
        <button type="submit">SUBMIT</button>
      </form>

      {popupMessage && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <p>{popupMessage}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Contact
