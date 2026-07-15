import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    name: 'Role Match Studio',
    description: 'A career recommendation experience with reusable React components, dynamic UI rendering, and responsive navigation.',
    tech: ['React', 'JavaScript', 'Responsive UI'],
    url: 'https://rolematchstudio.netlify.app/',
  },
  {
    name: 'LibCart',
    description: 'An interactive browser app using DOM manipulation, event handling, clipboard features, and a flexible responsive layout.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://libcart1.netlify.app/',
  },
]

const Projects = () => (
  <section className="section section-dark" id="projects">
    <div className="container">
      <div className="projects-header">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 className="section-heading">Projects that made me <em>think deeper.</em></h2>
        </div>
        <a className="text-link" href="https://github.com/Arohiyadav1008" target="_blank" rel="noreferrer">
          More on GitHub <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <a className="project-card" href={project.url} target="_blank" rel="noreferrer" key={project.name}>
            <span className="project-number">0{index + 1}</span>
            <div>
              <h3 className="project-name">{project.name}</h3>
              <div className="project-tech">
                {project.tech.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
            <p className="project-description">{project.description}</p>
            <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default Projects
