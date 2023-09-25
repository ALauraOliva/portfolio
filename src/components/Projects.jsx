import React from "react"
import projects from "../projects/projects"
import { FormattedMessage } from "react-intl"

const Projects = () => {
  return (
    <section id="projects" className="projects_section">
      <h1>
        <FormattedMessage id="projects.title" />
      </h1>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <a href={`#${project.name}`}>{project.name}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
