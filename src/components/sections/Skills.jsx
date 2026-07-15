const skillGroups = [
  { title: 'Core', skills: ['JavaScript', 'Java', 'HTML5', 'CSS3'] },
  { title: 'Frontend', skills: ['React', 'Tailwind CSS', 'Responsive UI', 'DOM APIs'] },
  { title: 'Workflow', skills: ['Git', 'GitHub', 'Vite', 'Netlify', 'VS Code'] },
  { title: 'Strengths', skills: ['Problem Solving', 'Accessibility', 'Performance', 'Teamwork'] },
]

const Skills = () => (
  <section className="section" id="skills">
    <div className="container">
      <p className="eyebrow">Capabilities</p>
      <h2 className="section-heading">Tools I use to turn <em>ideas into interfaces.</em></h2>
      <p className="section-intro">
        A focused toolkit for building modern web experiences, supported by strong
        programming fundamentals and a habit of learning by making.
      </p>

      <div className="skills-layout">
        <div className="skill-orbit" aria-hidden="true">
          <span className="orbit-label">Design. Build. Refine.</span>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Skills
