import React from "react"

export const Project = ({ project }) => {
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
          checked
          readOnly
        />
        <input
          type="radio"
          name="radio"
          id={`project_${project.name.replace(/\s+/g, "_")}2`}
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
                    <img
                      src="/src/assets/svg/rocketIcon.svg"
                      alt="go_to_deploy"
                    />
                  </a>
                  <tool-tip role="tooltip">Deploy</tool-tip>
                </li>
                <li>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/src/assets/svg/githubIcon.svg"
                      alt="go_to_repository"
                    />
                  </a>
                  <tool-tip role="tooltip">Repository</tool-tip>
                </li>
              </ul>
            </div>
            <div className="project_subContent">
              <span>{project.date}</span>
              <h2>Role</h2>
              <div className="project_roles">
                {project.role.map((role, index) => (
                  <span key={index}>{role}</span>
                ))}
              </div>
              <h2>Tech Stack</h2>
              <div className="project_techs">
                {project.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </article>
        <article className="project_slide">
          <h1>{project.name}</h1>
          <div className="project_content">
            <p className="project_resume">{project.resume} </p>
            <div className="project_subContent">
              <h2>Role</h2>
              <div className="project_roles">
                {project.role.map((role, index) => (
                  <span key={index}>{role}</span>
                ))}
              </div>
              <h2>Tech Stack</h2>
              <div className="project_techs">
                {project.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className="project_navigation">
        <label
          className="bar"
          htmlFor={`project_${project.name.replace(/\s+/g, "_")}1`}
        ></label>
        <label
          className="bar"
          htmlFor={`project_${project.name.replace(/\s+/g, "_")}2`}
        ></label>
      </div>
    </section>
  )
}
