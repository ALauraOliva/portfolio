import React, { useContext, useState } from "react"
import { langContext } from "../context/langContext"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { HiDocumentText } from "react-icons/hi2"

const Home = () => {
  const language = useContext(langContext)
  const phraseLogo = "andrea laura | andrea laura | "
  const deg = 360 / phraseLogo.length
  const [isChecked, setIsChecked] = useState(false)

  const handleLabelClick = () => {
    if (isChecked) {
      language.setLanguage("en-US")
    } else {
      language.setLanguage("es-ES")
    }
  }

  return (
    <section id="home" className="home_section">
      <article className="home_left">
        <div className="home_spinning">
          <p>
            {phraseLogo.split("").map((letter, index) => (
              <span
                key={index}
                style={{ transform: `rotate(${deg * index}deg)` }}
              >
                {letter}
              </span>
            ))}
          </p>
        </div>
        <img src="/static/myPhoto.webp" alt="photo" />
      </article>
      <article className="home_right">
        <div className="home_rightContainer">
          <input
            type="checkbox"
            className="toggle"
            id="check"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label htmlFor="check" onClick={handleLabelClick}></label>
          <h1>FULL STACK DEVELOPER</h1>
          <h2>{language.messages.home_subTitle}</h2>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/andrea-laura-99604a275/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin className="home-react-icons" />
              </a>
              <tool-tip role="tooltip">LinkedIn</tool-tip>
            </li>
            <li>
              <a
                href="https://github.com/ALauraOliva"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="home-react-icons" />
              </a>
              <tool-tip role="tooltip">Github</tool-tip>
            </li>
            <li>
              <a
                href={
                  isChecked
                    ? "/static/Docs/Andrea_Laura_Esp.pdf"
                    : "/static/Docs/Andrea_Laura_Eng.pdf"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiDocumentText className="home-react-icons" />
              </a>
              <tool-tip role="tooltip">CV</tool-tip>
            </li>
          </ul>
        </div>
      </article>
    </section>
  )
}

export default Home
