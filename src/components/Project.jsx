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
        />
        <input
          type="radio"
          name="radio"
          id={`project_${project.name.replace(/\s+/g, "_")}2`}
        />

        <article className="project_slide slide_checked">
          <h1>{project.name}</h1>
          <div className="project_content">
            <p>{project.resume}</p>
            <div className="project_subContent">
              <h2>Role</h2>
              {project.role}
              <h2>Tech Stack</h2>
              {project.tech}
            </div>
          </div>
        </article>
        <article className="project_slide">blah</article>
      </div>

      <div className="project_navigation">
        <label
          className="bar"
          for={`project_${project.name.replace(/\s+/g, "_")}1`}
        ></label>
        <label
          className="bar"
          for={`project_${project.name.replace(/\s+/g, "_")}2`}
        ></label>
      </div>
    </section>
  )
}
