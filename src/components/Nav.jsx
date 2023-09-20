import React from "react"

export const Nav = ({ colorLinks }) => {
  return (
    <nav className="nav_cont_global">
      <h1 className="nav_logo" style={{ color: colorLinks }}>
        {"< al />"}
      </h1>
      <ul className="nav">
        <a href="#home" style={{ color: colorLinks }}>
          Home
        </a>
        <a href="#about" style={{ color: colorLinks }}>
          About
        </a>
        <a href="#projects" style={{ color: colorLinks }}>
          Projects
        </a>
        <a href="#contact" style={{ color: colorLinks }}>
          Contact
        </a>
      </ul>
    </nav>
  )
}
