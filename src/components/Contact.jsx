import React, { useRef, useState, useContext } from "react";
import { langContext } from "../context/langContext";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const { messages } = useContext(langContext);
  const [popupMessage, setPopupMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gevcm95",
        "template_9u991ve",
        form.current,
        "WcDrvFzS70xJ5uc-T"
      )
      .then(
        (result) => {
          e.target.reset();
          setPopupMessage(messages.contact.messageGood);
        },
        (error) => {
          console.log(error.text);
          setPopupMessage(messages.contact.messageBad);
        }
      );
  };

  const closePopup = () => {
    setPopupMessage(null);
  };

  return (
    <section id="contact" className="contact_section">
      <h1>{messages.contact.title}</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="row">
          <div className="contact_inputGroup">
            <input type="text" id="name" name="user_name" required />
            <label htmlFor="name">{messages.contact.name}</label>
          </div>
          <div className="contact_inputGroup">
            <input type="text" id="number" name="user_phone" required />
            <label htmlFor="number">{messages.contact.phone}</label>
          </div>
        </div>
        <div className="contact_inputGroup">
          <input type="email" id="email" name="user_email" required />
          <label htmlFor="email">{messages.contact.email}</label>
        </div>
        <div className="contact_inputGroup">
          <textarea id="message" rows="9" name="message" required></textarea>
          <label htmlFor="message">{messages.contact.message}</label>
        </div>
        <button type="submit">{messages.contact.submit}</button>
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
  );
};

export default Contact;
