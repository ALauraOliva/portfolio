import React from "react"
import { AiFillHtml5 } from "react-icons/ai"
import { SiCss3 } from "react-icons/si"
import { BiLogoReact } from "react-icons/bi"

export const Projects = () => {
  const listProjects = [<AiFillHtml5 />, <SiCss3 />, <BiLogoReact />]
  const deg = 30 / listProjects.length

  return (
    <section id="projects" className="projects_section">
      <div className="projects_nav">
        <h1>projects</h1>
        <div className="projects_spinning">
          <p>
            {listProjects.map((project, index) => (
              <span
                key={index}
                style={{ transform: `rotate(${deg * index}deg)` }}
              >
                {project}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
