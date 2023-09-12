import { useState, useEffect } from "react"
import { Home } from "./components/Home"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { Nav } from "./components/Nav"

function App() {
  const [colorLinks, setColorLinks] = useState("white")

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home")
      const aboutSection = document.getElementById("about")
      const projectsSection = document.getElementById("projects")
      const contactSection = document.getElementById("contact")
      const scrollPosition = document.getElementById("scroller").scrollTop

      if (
        scrollPosition >= homeSection.offsetTop &&
        scrollPosition < aboutSection.offsetTop
      ) {
        setColorLinks("white")
      } else if (
        scrollPosition >= aboutSection.offsetTop &&
        scrollPosition < projectsSection.offsetTop
      ) {
        setColorLinks("black")
      } else if (
        scrollPosition >= projectsSection.offsetTop &&
        scrollPosition < contactSection.offsetTop
      ) {
        setColorLinks("#f2e8d5")
      } else {
        setColorLinks("#0c3a4d")
      }
    }

    const scroller = document.getElementById("scroller")
    scroller.addEventListener("scroll", handleScroll)

    return () => {
      scroller.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main id="scroller" className="app_main">
      <Nav colorLinks={colorLinks} />
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
