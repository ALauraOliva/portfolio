import React, { useState, useContext } from "react";
import { langContext } from "../context/langContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLine } from "react-icons/ri";

const Nav = ({ colorLinks }) => {
  const [isNavVisible, setIsNavVisible] = useState(false); //?hamburguer nav is visible?
  const { messages } = useContext(langContext);

  const openNav = () => {
    setIsNavVisible(true);
  };

  const closeNav = () => {
    setIsNavVisible(false);
  };

  const linkColor = isNavVisible ? "#0c3a4d" : colorLinks;

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
        } ${linkColor === "#0c3a4d" && "navContBackColor"}`}
        id="nav"
      >
        <button
          className="nav_burguerButtonClose"
          id="close"
          onClick={closeNav}
        >
          <RiCloseLine className="close_icon" color={linkColor} />
        </button>
        <ul className="nav">
          <li>
            <a href="#home" style={{ color: linkColor }}>
              {messages.nav.home}
            </a>
          </li>
          <li>
            <a href="#about" style={{ color: linkColor }}>
              {messages.nav.about}
            </a>
          </li>
          <li>
            <a href="#projects" style={{ color: linkColor }}>
              {messages.nav.projects}
            </a>
          </li>
          <li>
            <a href="#contact" style={{ color: linkColor }}>
              {messages.nav.contact}
            </a>
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default Nav;
