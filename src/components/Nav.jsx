import React from "react"

export const Nav = () => {
  return (
    <header className="nav_cont_global">
      <img alt="logo" />
      <nav className="nav">
        <a target="/Home">Home</a>
        <a target="#">About</a>
        <a target="#">Projects</a>
        <a target="#">Contact</a>
      </nav>
    </header>
  )
}
