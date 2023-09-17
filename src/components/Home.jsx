import React from "react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { HiDocumentText } from "react-icons/hi2"

export const Home = () => {
  return (
    <section id="home" className="home_section">
      <article className="home_left">
        <img src="/src/assets/myPhoto.jpg" alt="photo" />
      </article>
      <article className="home_right">
        <div>
          <h1>FULL STACK DEVELOPER</h1>
          <h3>Transform lines of code into unique web experiences.</h3>
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
                href="https://github.com/ALauraOliva"
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
