import { createElement } from 'react'
import { BookOpen, Code2, Trophy } from 'lucide-react'

const milestones = [
  {
    icon: Code2,
    title: '100+ LeetCode problems',
    text: 'Solved in Java with a focus on data structures, algorithms, and clear reasoning.',
  },
  {
    icon: Trophy,
    title: 'Coding contests',
    text: 'Active participation in hackathons and competitive programming challenges.',
  },
  {
    icon: BookOpen,
    title: 'Continuous learning',
    text: 'Regularly expanding frontend knowledge through practical projects and experimentation.',
  },
]

const Education = () => (
  <section className="section" id="education">
    <div className="container">
      <p className="eyebrow">Education &amp; growth</p>
      <h2 className="section-heading">Learning in the classroom, <em>proving it in code.</em></h2>

      <div className="education-grid">
        <article className="education-card">
          <span className="education-year">2023 — 2027 · Ghaziabad, UP</span>
          <h3>B.Tech in Computer Science &amp; Engineering</h3>
          <p>
            IMS Engineering College, AKTU. Building a broad foundation in software
            development, algorithms, data structures, and modern web technologies.
          </p>
        </article>

        <div className="learning-list">
          {milestones.map(({ icon, title, text }) => (
            <div className="learning-item" key={title}>
              <span className="learning-icon">{createElement(icon, { size: 18 })}</span>
              <div>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Education
