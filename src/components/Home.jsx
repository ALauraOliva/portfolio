import React from "react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { HiDocumentText } from "react-icons/hi2"
import { LazyLoadImage } from "react-lazy-load-image-component"

const Home = () => {
  const phraseLogo = "andrea laura | andrea laura |"
  const deg = 360 / phraseLogo.length

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
        <LazyLoadImage src="/src/assets/myPhoto.webp" alt="photo" />
      </article>
      <article className="home_right">
        <div>
          <h1>FULL STACK DEVELOPER</h1>
          <h2>Transform lines of code into unique web experiences.</h2>
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
                href="/src/assets/Docs/Andrea_Laura_Eng.pdf"
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
