import React from "react"
import { BiLogoSass } from "react-icons/bi"
import { BiLogoJavascript } from "react-icons/bi"
import { AiFillHtml5 } from "react-icons/ai"
import { SiCss3 } from "react-icons/si"
import { BiLogoReact } from "react-icons/bi"
import { BiLogoRedux } from "react-icons/bi"
import { BiLogoNodejs } from "react-icons/bi"
import { SiExpress } from "react-icons/si"
import { FaDatabase } from "react-icons/fa"
import { SiMysql } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"
import { AiFillCode } from "react-icons/ai"
import { DiScrum } from "react-icons/di"
import { AiFillGithub } from "react-icons/ai"
import { BsSlack } from "react-icons/bs"

const techs = [
  { techName: "Sass", icon: <BiLogoSass />, category: "front" },
  {
    techName: "JavaScript",
    icon: <BiLogoJavascript />,
    category: "front",
  },
  { techName: "HTML", icon: <AiFillHtml5 />, category: "front" },
  { techName: "CSS", icon: <SiCss3 />, category: "front" },
  { techName: "React", icon: <BiLogoReact />, category: "front" },
  { techName: "Redux", icon: <BiLogoRedux />, category: "front" },
  { techName: "Node js", icon: <BiLogoNodejs />, category: "back" },
  { techName: "Express", icon: <SiExpress />, category: "back" },
  { techName: "SQL", icon: <FaDatabase />, category: "back" },
  { techName: "MySQL", icon: <SiMysql />, category: "back" },
  {
    techName: "PostgreSQL",
    icon: <BiLogoPostgresql />,
    category: "back",
  },
  { techName: "AS400", icon: <AiFillCode />, category: "back" },
  { techName: "Scrum", icon: <DiScrum />, category: "other" },
  { techName: "Git", icon: <AiFillGithub />, category: "other" },
  { techName: "Slack", icon: <BsSlack />, category: "other" },
  { techName: "GENEXUS", img: "src/assets/genexusIcon.png", category: "other" },
]
export const About = () => {
  const categories = ["front", "back", "other"]
  return (
    <section id="about" className="about_section">
      <h1>
        about me <div className="about_line"></div>
      </h1>
      <article className="about_content">
        <p>
          Graduated in <span>Systems Engineering</span>, in search of exciting
          challenges in the field of Full Stack development, with a particular
          focus on the
          <span> Front-End</span>. I also possess strong skills in the
          <span> Back End</span>, which allows me to comprehend and tackle
          projects comprehensively, from user interface design to data
          management in the backend.
        </p>
        <p>
          My goal is to contribute to the development of innovative and
          efficient technological solutions, leveraging my education and passion
          for delevopment to make an impact in the digital world.
        </p>
      </article>
      <h2>
        <div className="about_line"></div> technologies
      </h2>
      <article className="about_techs">
        {categories.map((category) => (
          <div key={category} className="about_category">
            <h3>
              {category === "front"
                ? "Front-End"
                : category === "back"
                ? "Back-End"
                : "Others"}
            </h3>
            <div key={category} className="about_stack">
              {techs
                .filter((tech) => tech.category === category)
                .map((tech) => (
                  <figure key={tech.techName}>
                    {tech.icon ? (
                      tech.icon
                    ) : (
                      <img src={tech.img} alt={tech.techName} />
                    )}
                    <figcaption>{tech.techName}</figcaption>
                  </figure>
                ))}
            </div>
          </div>
        ))}
      </article>
    </section>
  )
}
