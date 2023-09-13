import React from "react"

export const Nav = ({ colorLinks }) => {
  return (
    <nav className="nav_cont_global">
      <img alt="logo" />
      <ul className="nav">
        <li>
          <a href="#home" style={{ color: colorLinks }}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" style={{ color: colorLinks }}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" style={{ color: colorLinks }}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" style={{ color: colorLinks }}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
