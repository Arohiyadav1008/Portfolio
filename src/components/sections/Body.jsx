import { ArrowDownRight, Mail } from 'lucide-react'
import heroImage from '../../assets/hero.png'

const Body = () => (
  <section className="hero-section" id="home">
    <div className="container hero-grid">
      <div>
        <div className="availability">
          <span className="availability-dot" />
          Open to internships &amp; collaborations
        </div>

        <h1 className="hero-title">
          Frontend
          <span>developer.</span>
        </h1>

        <p className="hero-copy">
          I&apos;m <strong>Arohi Yadav</strong>, a React-focused developer creating responsive,
          thoughtful interfaces where clean code meets a clear user experience.
        </p>

        <div className="hero-actions">
          <a className="button-primary" href="#projects">
            Explore my work <ArrowDownRight size={17} />
          </a>
          <a className="button-secondary" href="mailto:arohi.yadav.dev@outlook.com">
            <Mail size={16} /> Email me
          </a>
        </div>

        <div className="hero-meta" aria-label="Social profiles">
          <a href="https://github.com/Arohiyadav1008" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/arohi-yadav-449b87262" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://leetcode.com/u/arohi_yadav1008/" target="_blank" rel="noreferrer">LeetCode</a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Portrait of Arohi Yadav">
        <div className="portrait-frame">
          <img src={heroImage} alt="Arohi Yadav" />
        </div>
        <div className="portrait-note" aria-hidden="true">
          <strong>100+</strong>
          <span>Problems solved</span>
        </div>
      </div>
    </div>
  </section>
)

export default Body
