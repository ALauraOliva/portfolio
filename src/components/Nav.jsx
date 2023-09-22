import React, { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { RiCloseLine } from "react-icons/ri"

export const Nav = ({ colorLinks }) => {
  const [isNavVisible, setIsNavVisible] = useState(false)

  const openNav = () => {
    setIsNavVisible(true)
  }

  const closeNav = () => {
    setIsNavVisible(false)
  }

  return (
    <nav className="nav_cont_global">
      <h1 className="nav_logo" style={{ color: colorLinks }}>
        {"< al />"}
      </h1>
      <button className="nav_burguerButtonOpen" id="open" onClick={openNav}>
        <RxHamburgerMenu size={25} color={colorLinks} />
      </button>
      <aside
        className={`navCont ${
          isNavVisible ? "navCont_visible" : "navCont_hidden"
        }`}
        id="nav"
      >
        <button
          className="nav_burguerButtonClose"
          id="close"
          onClick={closeNav}
        >
          <RiCloseLine className="close_icon" />
        </button>
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
      </aside>
    </nav>
  )
}
