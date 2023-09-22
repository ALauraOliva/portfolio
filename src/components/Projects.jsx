import React from "react"
import projects from "../projects/projects"

export const Projects = () => {
  return (
    <section id="projects" className="projects_section">
      <h1>projects</h1>
      <ul>
        {projects.map((project) => (
          <li>
            <a href={`#${project.name}`} key={project.name}>
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
