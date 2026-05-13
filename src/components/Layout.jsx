import { useEffect, useState } from 'react'
import logo from '../assets/logo.jpeg'
import { contactInfo } from '../data'

const links = [
  ['#home', 'Home'],
  ['#specials', 'Specials'],
  ['#menu', 'Menu'],
  ['#contact', 'Contact']
]

export default function Layout({ children, activePage = '#home' }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [activePage])

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-row">
          <a href="#home" className="brand" aria-label="Spice Junction home">
            <img src={logo} alt="Spice Junction logo" />
          </a>

          <button className="menu-button" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation" aria-expanded={open}>
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav-links ${open ? 'show' : ''}`}>
            {links.map(([to, label]) => (
              <a
                key={label}
                href={to}
                className={activePage === to ? 'active' : ''}
                aria-current={activePage === to ? 'page' : undefined}
              >
                {label}
              </a>
            ))}
            <a className="whatsapp-link" href={contactInfo.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer polished-footer">
        <div className="container footer-center">
          <h3 className="footer-brand-text">Spice Junction</h3>
          <p>{contactInfo.address}</p>
          <p>Copyright © 2026 Spice Junction | All rights reserved.</p>
          <p className="footer-powered">Powered by VJ Marketing Company</p>
          <div className="footer-legal-actions">
            <a href="#terms" className="footer-pill">Terms &amp; Conditions</a>
            <a href="#privacy" className="footer-pill">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
