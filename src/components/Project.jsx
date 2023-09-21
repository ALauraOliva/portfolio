import React from "react"

export const Project = ({ project }) => {
  return (
    <section
      id={project.name}
      className={`project_section project_${project.name.replace(/\s+/g, "_")}`}
    >
      <h1>{project.name}</h1>
      <article className="project_scroller">
        <p>{project.resume}</p>
        <div>
          <h2>Role</h2>
          {project.role}
          <h2>Tech Stack</h2>
          {project.tech}
        </div>
      </article>
    </section>
  )
}
