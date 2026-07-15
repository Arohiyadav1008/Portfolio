import { useState } from 'react'
import { ArrowUpRight, Send } from 'lucide-react'

const Contact = () => {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://formspree.io/f/mlgapqqa', {
        method: 'POST',
        body: new FormData(event.currentTarget),
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) throw new Error('Submission failed')
      event.currentTarget.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-grid">
            <div>
              <p className="eyebrow">Start a conversation</p>
              <h2 className="contact-heading">Have an idea? Let&apos;s talk.</h2>
              <p className="contact-copy">
                I&apos;m open to internships, entry-level opportunities, and thoughtful
                collaborations. Send a note and I&apos;ll get back to you.
              </p>
              <div className="contact-details">
                <a href="mailto:arohi.yadav.dev@outlook.com">arohi.yadav.dev@outlook.com</a>
                <span>Ghaziabad, Uttar Pradesh, India</span>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email address</label>
                <input id="email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="message">What&apos;s on your mind?</label>
                <textarea id="message" name="message" required />
              </div>

              {status === 'success' && <p className="form-status" role="status">Thanks — your message is on its way.</p>}
              {status === 'error' && <p className="form-status" role="alert">The message didn&apos;t send. Please email me directly.</p>}

              <button className="button-primary" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message'} <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        <footer className="site-footer">
          <span>© 2026 Arohi Yadav. Designed and built with care.</span>
          <div className="footer-links">
            <a href="#home">Back to top</a>
            <a href="https://github.com/Arohiyadav1008" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={11} /></a>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Contact
