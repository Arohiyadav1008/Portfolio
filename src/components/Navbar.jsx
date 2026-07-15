import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Education', 'education'],
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <a className="nav-brand" href="#home" onClick={closeMenu}>
        <span className="brand-mark" aria-hidden="true">AY</span>
        <span>Arohi Yadav</span>
      </a>

      <div className={`nav-links${open ? ' open' : ''}`}>
        {links.map(([label, id]) => (
          <a className="nav-link" href={`#${id}`} onClick={closeMenu} key={id}>
            {label}
          </a>
        ))}
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Let&apos;s talk</a>
      </div>

      <button
        className="menu-button"
        type="button"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </nav>
  )
}

export default Navbar
