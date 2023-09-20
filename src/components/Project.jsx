import React from "react"

export const Project = ({ project }) => {
  return (
    <section
      id={project.name}
      className="project_section"
      style={{ backgroundColor: `#${project.color1}` }}
    >
      {project.name}
    </section>
  )
}
