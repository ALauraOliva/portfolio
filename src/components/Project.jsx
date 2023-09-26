import React, { useState } from "react"

const Project = ({ project }) => {
  const [isChecked, setIsChecked] = useState(false) // Inicialmente marcado

  const handleRadioChange = () => {
    setIsChecked(!isChecked) // Cambia el estado cuando se cambia el radio button
  }

  return (
    <section
      id={project.name}
      className={`project_section project_${project.name.replace(/\s+/g, "_")}`}
    >
      <div className="project_slides">
        <input
          type="radio"
          name="radio"
          id={`project_${project.name.replace(/\s+/g, "_")}1`}
          onChange={handleRadioChange}
          readOnly
        />
        <input
          type="radio"
          name="radio"
          id={`project_${project.name.replace(/\s+/g, "_")}2`}
          onChange={handleRadioChange}
          readOnly
        />

        <article className="project_slide slide_checked">
          <h1>{project.name}</h1>
          <div className="project_content">
            <div className="project_resume">
              {project.resume}
              <br />
              <br />
              <span>{project.resume_part2}</span>
              <ul>
                <li>
                  <a
                    href={project.deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/static/svg/rocketIcon.svg" alt="go_to_deploy" />
                  </a>
                  <tool-tip role="tooltip">{project.deploy}</tool-tip>
                </li>
                <li>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/static/svg/githubIcon.svg"
                      alt="go_to_repository"
                    />
                  </a>
                  <tool-tip role="tooltip">{project.repository}</tool-tip>
                </li>
              </ul>
            </div>
            <div className="project_subContent">
              <span>{project.date}</span>
              <h2> {project.role_name}</h2>
              <div className="project_roles">
                {project.role.map((role, index) => (
                  <span key={index}>{role}</span>
                ))}
              </div>
              <h2>{project.stack}</h2>
              <div className="project_techs">
                {project.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </article>
        <article className="project_slide">
          <div className="project_imgs_cont">
            <div className="project_position">
              <img src={project.img1} alt="img1" className="img1" />
              <img src={project.img2} alt="img2" className="img2" />
            </div>
          </div>
        </article>
      </div>

      <div className="project_navigation">
        <label
          className="bar"
          htmlFor={`project_${project.name.replace(/\s+/g, "_")}1`}
        >
          <img src="/static/svg/arrowLeft.svg" alt="ArrowLeft" />
        </label>
        <label
          className={`bar ${isChecked ? "hidden" : "visible"}`}
          htmlFor={`project_${project.name.replace(/\s+/g, "_")}2`}
        >
          <img src="/static/svg/arrowRigth.svg" alt="ArrowRigth" />
        </label>
      </div>
    </section>
  )
}

export default Project
