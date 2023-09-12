import { Home } from "./components/Home"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { Nav } from "./components/Nav"

function App() {
  return (
    <main className="app_main">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
