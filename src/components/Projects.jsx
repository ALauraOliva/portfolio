import React, { useContext } from "react"
import { langContext } from "../context/langContext"

const Projects = () => {
  const { messages } = useContext(langContext)

  return (
    <section id="projects" className="projects_section">
      <h1>{messages.projects_title}</h1>
      <ul>
        {messages.project.map((project) => (
          <li key={project.name}>
            <a href={`#${project.name}`}>{project.name}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
