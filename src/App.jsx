import Navbar from './components/Navbar'
import Body from './components/sections/Body'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import './App.css'

const App = () => (
  <div className="site-shell">
    <Navbar />
    <main>
      <Body />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  </div>
)

export default App
